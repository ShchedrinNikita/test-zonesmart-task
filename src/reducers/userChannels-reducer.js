import * as actionTypes from '../actions/types'

const initialState = {
    userChannels: []
}

export const userChannels_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_CHANNELS:
            return {
                userChannels: action.payload
            };
        default:
            return state
    }
}
