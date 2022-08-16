import categories from "./categories";
import products from "./products";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
  categories,
  products
})
export default rootReducer;