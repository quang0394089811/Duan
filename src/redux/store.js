import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Reducers } from './reducers/Reducers';
import { combineReducers } from 'redux';
const middleware = [thunk]

const routeReducer = combineReducers({ Reducers })
export const store = createStore(routeReducer, applyMiddleware(...middleware))

export default store;