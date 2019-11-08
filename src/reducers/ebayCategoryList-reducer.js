import * as actionTypes from '../actions/types'

const initialState = {
    ebayCategoryList: [],
    nextPageToken: ''
}

export const ebayCategoryList_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EBAY_CATEGORY_LIST:
            return {
                ...state,
                ebayCategoryList: [ ...state.ebayCategoryList , ...action.payload ]
            };
        case actionTypes.SET_NEXT_PAGE_TOKEN:
            return {
                ...state,
                nextPageToken: action.payload.split('/').slice(-4).join('/')
            };
        default:
            return state
    }
}