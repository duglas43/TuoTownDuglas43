import categories from "./categories";
import products from "./products";
import home from "./home";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
  categories,
  products,
  home,
})
export default rootReducer;