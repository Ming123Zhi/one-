import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxPromiseMiddleware from "redux-promise-middleware";

import read from './reducers/reducer';

const reducers = combineReducers({
    read
})

const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));

export default store;