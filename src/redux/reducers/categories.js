const initialState = {
  sortBy:"popular",
  category:-1,
  subCategory:0,
  openMenu:false,
}
const categories = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY": 
      return {
        ...state,
        category: action.category,
        subCategory: action.subCategory,
      }
    case "TOGGLE_MENU": 
      return {
        ...state,
        openMenu: action.openMenu,
      };
    default:
      return state;
  }
};
export default categories;