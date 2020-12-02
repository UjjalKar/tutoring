import {
  SIGNUP_USER,
  SIGNUP_STUDENTS,
  FETCH_SIGNUP_STUDENTS_ERROR,
  FETCH_SIGNUP_STUDENTS_SUCCESS,
  FETCH_SIGNUP_STUDENTS_START,
} from '../type';
const initialState = {
  loading: false,
  signupSuccess: false,
  data: {
    student: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        data: {...state.data, ...action.payload},
      };
    case SIGNUP_STUDENTS:
      return {
        ...state,
        data: {
          ...state.data,
          student: [...state.data.student, action.payload],
        },
      };
    case FETCH_SIGNUP_STUDENTS_ERROR:
      return {
        ...state,
        loading: false,
      };
    case FETCH_SIGNUP_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        signupSuccess: true,
      };
    case FETCH_SIGNUP_STUDENTS_START:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
