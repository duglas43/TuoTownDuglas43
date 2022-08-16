export function setCategory(category, subCategory){
  return {
    type: "setCategory",
    category: category,
    subCategory: subCategory,
  }
}
export function toggleMenu(bool){
  return {
    type: "activeMenu",
    openMenu: bool,
  }
}