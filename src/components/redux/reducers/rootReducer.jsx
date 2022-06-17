import { combineReducers } from 'redux'
import Dish from './Dish'
const rootReducer = combineReducers({
    dish: Dish,
})

export default rootReducer