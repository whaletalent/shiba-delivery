import { LOAD_RESTAURANTS } from "./action_types";
import api from "../services/api";
 
export const loadRestaurants = (category = null) => async (dispatch) => {
  let response = await api.loadRestaurants(category);
  dispatch({
    type: LOAD_RESTAURANTS,
    restaurants: response.data.restaurants
  });
}