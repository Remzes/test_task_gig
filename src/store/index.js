import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware';
import reducers from '../reducers'

const middleware = applyMiddleware(promise(), reduxThunk);
const store = createStore(reducers, {}, middleware);

window.store = store;
export default store