import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import{todosReducers} from './reducers/todoReducers'
import { tabReducers } from './reducers/tabReducers';

const reducer=combineReducers({
    todos:todosReducers,
    currentTab:tabReducers


})

const middleware =[thunk];
const store=createStore(
     reducer,
     composeWithDevTools(applyMiddleware(...middleware))

)

export default store;