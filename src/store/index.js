import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxPromiseMiddleware from "redux-promise-middleware";

import read from './reducers/reducer';
import one from './reducers/onereducer';
import movie from './reducers/movie';
const reducers = combineReducers({
    read,
    one,
    movie
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;