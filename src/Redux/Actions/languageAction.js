import { SET_LANGUAGE } from '../type';

export const setLanguage = (language) => {
    return async (dispatch) => {
        dispatch({
            type: SET_LANGUAGE,
            payload: language,
        });
    };
};
