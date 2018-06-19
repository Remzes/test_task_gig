import {combineReducers} from 'redux';
import fetchPokemonsReducer from './fetchPokemonsReducer';
import filtersReducer from './filtersReducer'

export default combineReducers({
    pokemons: fetchPokemonsReducer,
    filters: filtersReducer
})