import { combineReducers } from 'redux';
import solarSystemReducer from './solarSystemReducer';
import filterReducer from './filterReducer';

export default combineReducers({ solarSystemReducer, filterReducer });
