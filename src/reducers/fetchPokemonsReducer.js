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
    case FETCH_POKEMONS_PENDING:
      return {...state, dataCached: false, fetching: true, fulfilled: false, progress: 0};
    case FETCH_POKEMONS_REJECTED:
      return {...state, dataCached: false, fetching: false, fulfilled: false, progress: 0, error: payload};
    case FETCH_POKEMONS_FULFILLING:
      return {
        ...state,
        dataCached: false,
        fetching: false,
        fetched: true,
        fulfilled: false,
        data: payload.pokemons,
        progress: payload.progressData
      };
    case FETCH_POKEMONS_FULFILLED:
      return {
        ...state,
        dataCached: false,
        fetching: false,
        fetched: true,
        fulfilled: true,
        data: payload.pokemons,
        progress: payload.progressData
      };
    default:
      return state;
  }
}