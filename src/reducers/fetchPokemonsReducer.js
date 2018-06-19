import {FETCH_POKEMONS_PENDING, FETCH_POKEMONS_REJECTED, FETCH_POKEMONS_FULFILLED} from '../actions/types';

const initialState = {
    fetching: false,
    fetched: false,
    data: [],
    error: null
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type){
        case FETCH_POKEMONS_PENDING:
            return {...state, fetching: true};
        case FETCH_POKEMONS_REJECTED:
            return {...state, fetching: false, error: payload};
        case FETCH_POKEMONS_FULFILLED:
            return {...state, fetching: false, fetched: true, data: payload.results};
        default:
            return state;
    }
}