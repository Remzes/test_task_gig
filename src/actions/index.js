import axios from 'axios'
import _ from 'lodash';
import {localStorageReduxStore} from "../constants/"

const limit = 10;
const step = 2;

const fetchPokemonsResourceList = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`);
  return res
};

const transformPokemonObject = async (object) => {
  const {data} = await axios.get(object.species.url);
  return {
    name: object.name,
    sprite: object.sprites.front_default,
    types: object.types.map(it => it.type.name),
    abilities: object.abilities.map(el => el.ability.name),
    species: object.species.name,
    color: data.color.name
  }
};

// We actually sending chunks of pokemons to the Redux store without blocking UI
export const fetchPokemons = () => async dispatch => {
  try {
    const info = localStorage.getItem(localStorageReduxStore);
    if (info === null || (info !== null && JSON.parse(info).pokemons.fulfilled === false)) {
      const rl = await fetchPokemonsResourceList();
      const pokemons = [];

      dispatch({type: 'FETCH_POKEMONS_PENDING'});

      for (const item of _.chunk(rl.data.results, step)) {
        setTimeout(async () => {
          const urls = item.map(el => axios.get(el.url));
          const data = await Promise.all(urls);

          const pokemonsChunkPromises = data.map(pokemon => transformPokemonObject(pokemon.data));
          const pokemonsChunk = await Promise.all(pokemonsChunkPromises);
          pokemons.push(...pokemonsChunk);

          pokemons.length === limit
          ? dispatch({type: 'FETCH_POKEMONS_FULFILLED', payload: {pokemons, progress: 100}})
          : dispatch({type: 'FETCH_POKEMONS_FULFILLING', payload: {pokemons, progress: 100 / (limit / pokemons.length)}});
        }, step * 100)
      }
    }
  } catch (e) {
    dispatch({type: 'FETCH_POKEMONS_REJECTED', payload: e})
  }
};

export const searchPokemons = word => dispatch => {
  dispatch({type: 'SEARCH_POKEMONS', payload: word})
};

export const storedBoxValue = word => dispatch => {
  dispatch({type: 'STORE_SEARCH_BOX', payload: word})
};

export const selectTypes = types => dispatch => {
  dispatch({type: 'FILTER_BY_TYPE', payload: types})
};

export const toggleDashboard = () => dispatch => {
  dispatch({type: 'TOGGLE_DASHBOARD'})
};