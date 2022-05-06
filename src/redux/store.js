import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";


import rootReducer from "./root-reducer";

const middlewares = [thunk]

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
