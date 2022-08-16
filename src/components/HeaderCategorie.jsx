import React from "react";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setCategory,toggleMenu} from "../redux/actions/categories";
import {Link} from "react-router-dom";
import {fetchProducts} from "../redux/actions/products";

function HeaderCategorie({name,isSmall,category,subCategory, filter}) {
  const dispatch = useDispatch();
  function onSetCategory(category,subCategory) {
    dispatch(setCategory(category,subCategory));
  }
  function onClickButton(){
    dispatch(toggleMenu(false));
    dispatch(fetchProducts(filter));
  }
  return(
    <li onClick={()=>{onSetCategory(category,subCategory,filter)}} className={classnames("catalog__menu-item",{'catalog__menu-item--small':isSmall})}><Link to="/catalog" onClick={()=>{onClickButton()}}>{name}</Link></li>
  )
}
export default HeaderCategorie;
