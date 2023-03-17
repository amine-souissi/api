import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from './user/reducer'

export const store = createStore(reducer, applyMiddleware(thunk))