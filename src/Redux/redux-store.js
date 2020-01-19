import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import ticketsReducer from "./tickects-reducer";

const reducers = combineReducers({
    tickets: ticketsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store
