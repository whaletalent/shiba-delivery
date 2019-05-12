import axios from "axios";
 
const url = axios.create({ baseURL: "http://localhost:3001" })
 
export default {
  loadRestaurants: (category = null) => {
    let filter = category ? `?category=${category.title}` : ""
    return url.get(`/restaurants${filter}`)
  },
  loadCategories: () => url.get("/categories")
}