import {createSelector} from 'reselect'

const getFilters = state => state.filters;
const getPokemons = state => state.pokemons;

export const pokemonsFilterSelector = createSelector(getPokemons, getFilters, (pokemons, filters) => {
    const {searchBoxValue} = filters;
    const filteredPokemons = pokemons.data.filter(pokemon => pokemon.name.includes(searchBoxValue));
    return {...pokemons, data: filteredPokemons}
});