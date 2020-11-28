import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Redux/Reducers/index';

const middleware = [thunk];

const configReduxStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );
};

export default configReduxStore;
