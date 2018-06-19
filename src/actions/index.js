import axios from 'axios'
import {localStorageReduxStore} from "../constants/"

export const fetchPokemons = () => async dispatch => {
    if (localStorage.getItem(localStorageReduxStore) === null) {
        // const iterate = 500;
        // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=500&offset=${iterate}`);
        // const pagesRequired = res.data.count / iterate;
        // const APIPromises = [];
        // for (let i = 0; i < pagesRequired; i += 1) {
        //     APIPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=500&offset=${iterate * i}`));
        // }
        // const req = Promise.all(APIPromises);
        // dispatch({
        //     type: 'FETCH_POKEMONS', payload: req.then(result => {
        //         let mainObj = {};
        //
        //         result.forEach((obj) => {
        //             if (Object.keys(mainObj).length < 1) {
        //                 mainObj = obj
        //             } else {
        //                 mainObj.data.next = obj.data.next;
        //                 mainObj.data.results.push(...obj.data.results)
        //             }
        //         });
        //
        //         return mainObj.data
        //         // let APIData = []
        //         // let pokemons = []
        //         // mainObj.data.results.forEach((pok) => {
        //         //     APIData.push(axios.get(pok.url));
        //         //     if (APIData.length === 20) {
        //         //         axios.all(APIData)
        //         //             .then(poks => poks.forEach(p => {
        //         //                 pokemons.push({
        //         //                     name: p.name,
        //         //                     type: p.type
        //         //                 })
        //         //                 console.log(pokemons)
        //         //             }))
        //         //             .then(() => {APIData = []})
        //         //     }
        //         // })
        //
        //         // return pokemons
        //     })
        // })
    }
};

export const searchPokemons = word => dispatch => {
    dispatch({type: 'SEARCH_POKEMONS', payload: word})
};