/* eslint-disable no-undef */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from '../Reducers/index';

export default (configReduxStore = (initialState = {}) => {
  const middleware = compose(applyMiddleware(thunk, promise));
  return createStore(rootReducer, initialState, middleware);
});
