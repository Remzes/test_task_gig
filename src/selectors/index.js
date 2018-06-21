import {createSelector} from 'reselect'
import _ from 'lodash'

const getFilters = state => state.filters;
const getPokemons = state => state.pokemons;

export const filterTypesSelector = createSelector(getFilters, (filters) => filters.filterTypes);

export const pokemonsFilterSelector = createSelector(getPokemons, getFilters, (pokemons, filters) => {
  const {searchBoxValue, filterTypes} = filters;
  const filteredPokemons = pokemons.data.filter(pokemon => pokemon.name.includes(searchBoxValue) &&
      (filterTypes.length === 0 || _.intersection(filterTypes, pokemon.types).length === filterTypes.length)
  );
  return {...pokemons, data: filteredPokemons}
});