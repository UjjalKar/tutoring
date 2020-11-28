import {SAVE_IMAGE} from '../actions/types';

export default function(state = {}, action) {
  console.log(state, action, 'Reducer =====>');
  switch (action.type) {
    case SAVE_IMAGE:
      return {image: action.payload};
    default:
      return state;
  }
}
