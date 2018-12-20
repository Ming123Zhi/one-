import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import reducer from './reducers/reducer'
const reducers = combineReducers({
    reducer
})
const store = createStore(reducers,applyMiddleware(reduxPromiseMiddleware()));
export default store