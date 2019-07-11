import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import userReducer from './userReducer';
import uiReducer from './uiReducer';

export default combineReducers({ dataReducer, userReducer, uiReducer });
