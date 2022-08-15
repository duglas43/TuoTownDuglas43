import categories from "./categories";
import reducer2 from "./reducer2";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
  categories,
  reducer2
})
export default rootReducer;