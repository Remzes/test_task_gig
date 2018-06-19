import * as storage from 'redux-storage'
import {combineReducers} from 'redux';
import fetchPokemonsReducer from './fetchPokemonsReducer';
import filtersReducer from './filtersReducer'

const reducer = storage.reducer(combineReducers({
    pokemons: fetchPokemonsReducer,
    filters: filtersReducer
}));

export default reducer