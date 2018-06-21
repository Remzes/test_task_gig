import * as storage from 'redux-storage'
import {combineReducers} from 'redux';
import fetchPokemonsReducer from './fetchPokemonsReducer';
import filtersReducer from './filtersReducer'
import toggleDashboard from './toggleDashboardReducer'

const reducer = storage.reducer(combineReducers({
  pokemons: fetchPokemonsReducer,
  filters: filtersReducer,
  toggle: toggleDashboard
}));

export default reducer