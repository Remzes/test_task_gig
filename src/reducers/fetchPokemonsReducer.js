import {LOAD, SAVE} from 'redux-storage'
import _ from 'lodash'
import {
  FETCH_POKEMONS_PENDING,
  FETCH_POKEMONS_REJECTED,
  FETCH_POKEMONS_FULFILLING,
  FETCH_POKEMONS_FULFILLED
} from '../actions/types';

const initialState = {
  dataCached: false,
  fetching: false,
  fetched: false,
  fulfilled: false,
  data: [],
  progress: 0,
  error: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOAD:
      return {...state, ...payload}
    case SAVE:
      return {...state, ...payload}
    case FETCH_POKEMONS_PENDING:
      return {...state, fetching: true};
    case FETCH_POKEMONS_REJECTED:
      return {...state, error: payload};
    case FETCH_POKEMONS_FULFILLING:
      return {
        ...state,
        fetching: false,
        fetched: true,
        progress: payload.progress,
        data: _.union(state.data, payload.pokemons)
      };
    case FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        fulfilled: true,
        data: _.union(state.data, payload.pokemons),
        progress: payload.progress
      };
    default:
      return state;
  }
}