export const addProductToCart = (productObj) => ({
  type: 'ADD_PRODUCT_TO_CART',
  payload: productObj,
});
export const delOneProduct=(id)=>({
  type:"DEL_ONE_PRODUCT",
  payload:id,
})
export const delWholeProduct=(id)=>({
  type:"DEL_WHOLE_PRODUCT",
  payload:id
})
