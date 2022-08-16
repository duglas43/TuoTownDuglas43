import axios from "axios";
import PropTypes from "prop-types";
export const setActualTab = (actualTab) => {
  return {
    type: "setActualTab",
    actualTab,
  };
}
export function setHomeLoaded(val) {
  return{
    type:"SET_HOME_LOADED",
    isLoaded:val,
  }
}
export const fetchHomeProducts=(link)=>(dispatch)=>{
  dispatch(setHomeLoaded(false));
  axios.get(`https://my-json-server.typicode.com/duglas43/TuoTownduglas43/products?${link}`).then(({data})=>{
      dispatch(setHomeProducts(data));
  })
}
export function setHomeProducts(data) {
  return {
    type: "SET_HOME_PRODUCTS",
    actualItems: data,
  }
}
fetchHomeProducts.defaultProps = {
  link: "isNew=true",
}