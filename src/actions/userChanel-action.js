import * as actionTypes from './types'

export const getUserChannels = userChannels => {
    return {
        type: actionTypes.GET_USER_CHANNELS,
        payload: userChannels
    }
}

