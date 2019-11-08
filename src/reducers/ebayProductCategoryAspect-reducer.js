import * as actionTypes from '../actions/types'

const initialState = {
    ebayProductCategoryAspect: [],
    ebayProductCategoryAspectName: ''
}

export const ebayProductCategoryAspect_reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EBAY_PRODUCT_CATEGORY_ASPECT:
            return {
                ...state,
                ebayProductCategoryAspect: action.payload
            };
        case actionTypes.SET_EBAY_PRODUCT_CATEGORY_ASPECT_NAME:
            return {
                ...state,
                ebayProductCategoryAspectName: action.payload
            };
        default:
            return state
    }
}
