import axios from "axios";
import  PropTypes  from "prop-types";

export function setLoaded(val) {
  return{
    type:"SET_LOADED",
    items:val
  }
}
export const fetchProducts=(link)=>(dispatch)=>{
  dispatch(setLoaded(false));
  axios.get(`https://my-json-server.typicode.com/duglas43/TuoTownduglas43/products?${link}`).then(({data})=>{
      dispatch(setProducts(data));
  })
}
export function setProducts(data) {
  return {
    type: "SET_PRODUCTS",
    items: data,
  }
}
fetchProducts.PropTypes={
  link:PropTypes.string
}
fetchProducts.defaultProps={
  link:""
}


