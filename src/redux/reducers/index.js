import categories from "./categories";
import catalogProducts from "./catalogProducts";
import home from "./home";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
  categories,
  catalogProducts,
  home,
})
export default rootReducer;