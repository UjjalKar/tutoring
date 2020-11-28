import { combineReducers } from 'redux' 
import authReducer from './authReducer'
import langReducer from './langReducer'
import signUpReducer from "./signUpReducer"

export default combineReducers({
    userdata: authReducer,
    langData: langReducer,
    signUpData: signUpReducer
})