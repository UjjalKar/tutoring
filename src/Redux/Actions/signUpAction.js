import {
  SIGNUP_USER,
  SIGNUP_STUDENTS,
  FETCH_SIGNUP_STUDENTS_ERROR,
  FETCH_SIGNUP_STUDENTS_SUCCESS,
  FETCH_SIGNUP_STUDENTS_START,
} from '../type';

export const signUpUser = (data) => {
  // console.log('actionData:---', JSON.stringify(data));
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_USER,
      payload: data,
    });
  };
};

const fetchSignupStudentsError = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_STUDENTS_ERROR,
    });
  };
};
const fetchSignupStudentsStart = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_STUDENTS_START,
    });
  };
};
const fetchSignupStudentsSuccess = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_STUDENTS_SUCCESS,
    });
  };
};

export const signUpParant = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchSignupStudentsStart());
      const state = getState();
      console.log('getState:---', state.signUpData.data);
      fetch('https://sistemsystems.com/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.signUpData.data),
      })
        .then((ok) => ok.json())
        .then((data) => {
          dispatch(fetchSignupStudentsSuccess());
          console.log(data);
        })
        .catch((err) => {
          dispatch(fetchSignupStudentsError());
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addSignupStudent = (data) => {
  // console.log('addSignupStudent:---', JSON.stringify(data));
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_STUDENTS,
      payload: data,
    });
  };
};
