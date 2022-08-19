import categories from "./categories";
import catalogProducts from "./catalogProducts";
import cart from "./cart";
import home from "./home";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
  categories,
  catalogProducts,
  home,
  cart,
})
export default rootReducer;