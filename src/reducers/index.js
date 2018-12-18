import { combineReducers } from 'redux';
import color from './color';
import filter from './filter';
import highlight from './highlight';

export default combineReducers({
    color,
    filter,
    highlight
});
