import * as actionTypes from './types'

export const getEbayCategoryList = ebayCategoryList => {
    return {
        type: actionTypes.GET_EBAY_CATEGORY_LIST,
        payload: ebayCategoryList
    }
}

export const setNextPageToken = nextPageToken => {
    return {
        type: actionTypes.SET_NEXT_PAGE_TOKEN,
        payload: nextPageToken
    }
}