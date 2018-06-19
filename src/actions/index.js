import axios from 'axios'

export const fetchPokemons = () => dispatch => {
    const request = axios.get('https://pokeapi.co/api/v2/pokemon/?limit=949');
    dispatch({type: 'FETCH_POKEMONS', payload: request.then(result => result.data) })
};

export const searchPokemons = word => dispatch => {
    dispatch({type: 'SEARCH_POKEMONS', payload: word})
};