import axios from 'axios'
import _ from 'lodash';
import {localStorageReduxStore} from "../constants/"
import {loadImage} from "../utils/toBase64/toBase64"

let limit = 50;
let offset = 0;
const step = 5;
let iterate = 1;

const fetchPokemonsResourceList = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
  return res
};

const transformPokemonObject = async (object) => {
  const {data} = await axios.get(object.species.url);
  const image = await loadImage(object.sprites.front_default);
  const backImage = await loadImage(object.sprites.back_default);
  return {
    name: object.name,
    sprite: image,
    back_sprite: backImage,
    height: object.weight,
    weight: object.height,
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

      if (info !== undefined && info !== null) {
        const parsedInfo = JSON.parse(info);
        if (parsedInfo.pokemons !== undefined && parsedInfo.pokemons !== null) {
          offset = parsedInfo.pokemons.data.length
          limit -= offset
        }
      }
      const rl = await fetchPokemonsResourceList();
      let pokemons = []

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
        }, iterate * 100);
        iterate+=1
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