import {SAVE_USER} from './../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_USER:
      return {user: action.payload};
    default:
      return state;
  }
}
