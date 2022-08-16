const initialState = {
  sortBy:"popular",
  category:-1,
  subCategory:0,
  openMenu:false,
}
const categories = (state = initialState, action) => {
  switch (action.type) {
    case "setCategory": 
      return {
        ...state,
        category: action.category,
        subCategory: action.subCategory,
      }
    case "activeMenu": 
      return {
        ...state,
        openMenu: action.openMenu,
      };
    default:
      return state;
  }
  return state;
};
export default categories;