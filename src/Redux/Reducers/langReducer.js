import { SET_LANGUAGE } from '../type'

const initialState = {
    language: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default: return state
    }
}
