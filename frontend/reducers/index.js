import {combineReducers } from 'redux';
import blogpost from './blogpost'; 

const blogApp = combineReducers({
    blogpost,
})

export default blogApp;