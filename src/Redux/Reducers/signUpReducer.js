import {
  SIGNUP_DATA_PARAENT,
  FETCH_SIGNUP_ERROR,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_START,
  SIGNUP_DATA_PARAENT_ADD_STUDENT,
  SIGNUP_DATA_STUDENT,
  CHANGE_SIGNUP_FORM,
} from '../type';

const initialState = {
  loading: false,
  signupSuccess: false,
  parentData: {
    student: [],
  },
  studentData: {},
  renderForm: 'Parent',
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGNUP_DATA_PARAENT:
      return {
        ...state,
        parentData: {...state.parentData, ...action.payload},
      };
    case SIGNUP_DATA_PARAENT_ADD_STUDENT:
      return {
        ...state,
        parentData: {
          ...state.parentData,
          student: [...state.parentData.student, action.payload],
        },
      };
    case SIGNUP_DATA_STUDENT:
      return {
        ...state,
        studentData: {...state.studentData, ...action.payload},
      };
    case CHANGE_SIGNUP_FORM:
      return {
        ...state,
        renderForm: action.payload,
      };
    case FETCH_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signupSuccess: true,
      };
    case FETCH_SIGNUP_START:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
