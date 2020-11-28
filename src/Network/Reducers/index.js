import {combineReducers} from 'redux';
import userReducer from './userReducer';
import userImage from './userImageReducer';

export default combineReducers({
  userdata: userReducer,
  userimage: userImage,
});
