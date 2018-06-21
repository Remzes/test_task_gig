import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from '../reducers'
import {localStorageReduxStore} from '../constants'

const engine = createEngine(localStorageReduxStore);
const engineMiddleware = storage.createMiddleware(engine);

const middleware = applyMiddleware(engineMiddleware, reduxThunk);
const store = createStore(reducer, {}, middleware);

const load = storage.createLoader(engine);
load(store);

export default store