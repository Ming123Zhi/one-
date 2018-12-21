import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxPromiseMiddleware from "redux-promise-middleware";

import read from './reducers/reducer';
import one from './reducers/onereducer'
const reducers = combineReducers({
    read,
    one
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;