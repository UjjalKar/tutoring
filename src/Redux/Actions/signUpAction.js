import {
  FETCH_SIGNUP_ERROR,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_START,
  SIGNUP_DATA_PARAENT,
  SIGNUP_DATA_STUDENT,
  CHANGE_SIGNUP_FORM,
  SIGNUP_DATA_PARAENT_ADD_STUDENT,
} from '../type';

export const signUpParentData = (data) => {
  // console.log('actionData:---',);
  return async (dispatch, getState) => {
    // console.log('SignupUserData', getState());
    dispatch({
      type: SIGNUP_DATA_PARAENT,
      payload: data,
    });
  };
};

export const changeSignUpFrom = (data) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CHANGE_SIGNUP_FORM,
      payload: data,
    });
  };
};

export const signUpStudentData = (data) => {
  // console.log('actionData:---',);
  return async (dispatch, getState) => {
    // console.log('SignupUserData', getState());
    dispatch({
      type: SIGNUP_DATA_STUDENT,
      payload: data,
    });
  };
};

const fetchSignupStudentsError = (errors) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_ERROR,
      payload: errors,
    });
  };
};
const fetchSignupStudentsStart = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_START,
    });
  };
};
const fetchSignupStudentsSuccess = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SIGNUP_SUCCESS,
    });
  };
};

export const signUpStudent = () => {
  console.log('studentData...................>>>>');
  return async (dispatch, getState) => {
    try {
      dispatch(fetchSignupStudentsStart());
      const state = getState();
      console.log('studentData:---', state.signUpData.studentData);
      fetch('https://sistemsystems.com/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.signUpData.studentData),
      })
        .then((ok) => ok.json())
        .then((data) => {
          if (data.message === 'CREATED') {
            dispatch(fetchSignupStudentsSuccess());
          } else {
            dispatch(fetchSignupStudentsError(data));
          }

          console.log(data);
        })
        .catch((err) => {
          console.log(err);
          dispatch(fetchSignupStudentsError());
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpParant = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchSignupStudentsStart());
      const state = getState();
      console.log('parentData:---', state.signUpData.parentData);
      fetch('https://sistemsystems.com/api/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.signUpData.parentData),
      })
        .then((ok) => ok.json())
        .then((data) => {
          if (data.message === 'CREATED') {
            dispatch(fetchSignupStudentsSuccess());
          } else {
            dispatch(fetchSignupStudentsError(data));
          }

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

export const addParentSignupStudent = (data) => {
  // console.log('addSignupStudent:---', JSON.stringify(data));
  return async (dispatch) => {
    dispatch({
      type: SIGNUP_DATA_PARAENT_ADD_STUDENT,
      payload: data,
    });
  };
};
