import {SIGNUP_USER} from '../type'

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                data:{...state.data,...action.payload}
            }
        default: return state
    }
}