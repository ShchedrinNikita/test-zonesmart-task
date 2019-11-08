import { combineReducers } from 'redux'
import { userChannels_reducer } from './userChannels-reducer'
import { ebayCategoryList_reducer } from './ebayCategoryList-reducer'
import { ebayProductCategoryAspect_reducer } from './ebayProductCategoryAspect-reducer'



const rootReducer = combineReducers({
    userChannels: userChannels_reducer,
    ebayCategoryList: ebayCategoryList_reducer,
    ebayProductCategoryAspect: ebayProductCategoryAspect_reducer
    })

export default rootReducer