import axios from "axios";
import  PropTypes  from "prop-types";

export function setCatalogLoaded(val) {
  return{
    type:"SET_CATALOG_LOADED",
    isLoaded:val
  }
}
export const fetchCatalogProducts=(link)=>(dispatch)=>{
  dispatch(setCatalogLoaded(false));
  axios.get(`https://my-json-server.typicode.com/duglas43/TuoTownduglas43/products?${link}`).then(({data})=>{
      dispatch(setProducts(data));
  })
}
export function setProducts(data) {
  return {
    type: "SET_CATALOG_PRODUCTS",
    items: data,
  }
}
fetchCatalogProducts.PropTypes={
  link:PropTypes.string
}
fetchCatalogProducts.defaultProps={
  // link:"isNew=true"
}


