export function setCategory(category, subCategory){
  return {
    type: "SET_CATEGORY",
    category: category,
    subCategory: subCategory,
  }
}
export function toggleMenu(bool){
  return {
    type: "TOGGLE_MENU",
    openMenu: bool,
  }
}