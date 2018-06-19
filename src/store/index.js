import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage';
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import reducer from '../reducers'
import {localStorageReduxStore} from '../constants'

const engine = createEngine(localStorageReduxStore)
const engineMiddleware = storage.createMiddleware(engine);

const middleware = applyMiddleware(engineMiddleware, promise(), reduxThunk);
const store = createStore(reducer, {}, middleware);

const load = storage.createLoader(engine);
load(store);

window.store = store;
export default store