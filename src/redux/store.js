import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/reducers/index';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
