import { combineReducers } from 'redux';
import filter from './filter';

const allReducer = combineReducers({
    filter
})

export default allReducer;