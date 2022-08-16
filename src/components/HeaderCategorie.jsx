import React from "react";
import classnames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {setCategory,toggleMenu} from "../redux/actions/categories";
import {Link} from "react-router-dom";

function HeaderCategorie({name,isSmall,category,subCategory}) {
  const dispatch = useDispatch();
  function onSetCategory(category,subCategory) {
    dispatch(setCategory(category,subCategory));
  }
  function onClickButton(){
    dispatch(toggleMenu(false));
  }
  return(
    <li onClick={()=>{onSetCategory(category,subCategory)}} className={classnames("catalog__menu-item",{'catalog__menu-item--small':isSmall})}><Link to="/catalog" onClick={()=>{onClickButton()}}>{name}</Link></li>
  )
}
export default HeaderCategorie;
