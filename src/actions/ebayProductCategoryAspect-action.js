import * as actionTypes from './types'

export const getEbayProductCategoryAspect = ebayProductCategoryAspect => {
    return {
        type: actionTypes.GET_EBAY_PRODUCT_CATEGORY_ASPECT,
        payload: ebayProductCategoryAspect
    }
}

export const setEbayProductCategoryAspectName = ebayProductCategoryAspectName => {
    return {
        type: actionTypes.SET_EBAY_PRODUCT_CATEGORY_ASPECT_NAME,
        payload: ebayProductCategoryAspectName
    }
}

