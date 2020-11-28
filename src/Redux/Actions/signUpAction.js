import { SIGNUP_USER } from '../type';

export const signUpUser = (data) => {
    console.log("actionData:---",JSON.stringify(data))
    return async (dispatch) => {
        dispatch({
            type: SIGNUP_USER,
            payload: data,
        });
    };
}