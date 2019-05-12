import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
 
export default combineReducers({
  restaurantsState: RestaurantsReducer
})