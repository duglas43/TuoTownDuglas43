import axios from "axios";
export const setActualTab = (actualTab) => {
  return {
    type: "SET_ACTUAL_TAB",
    actualTab,
  };
}
function setHomeLoaded(val) {
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
function setHomeProducts(data) {
  return {
    type: "SET_HOME_PRODUCTS",
    items: data,
  }
}
function setActualHomeLoaded(val) {
  return{
    type:"SET_ACTUAL_HOME_LOADED",
    isLoaded:val,
  }
}
export const fetchActualHomeProducts=(link)=>(dispatch)=>{
  dispatch(setActualHomeLoaded(false));
  axios.get(`https://my-json-server.typicode.com/duglas43/TuoTownduglas43/products?${link}`).then(({data})=>{
      dispatch(setActualHomeProducts(data));
  })
}
function setActualHomeProducts(data) {
  return {
    type: "SET_ACTUAL_HOME_PRODUCTS",
    actualItems: data,
  }
}
