import React from "react";
import classnames from "classnames";
import {useDispatch} from "react-redux";
import {toggleMenu} from "../redux/actions/categories";
import {Link} from "react-router-dom";
function HeaderCategorie({name,isSmall,category,subCategory, filter, onSelectCategory}) {
  const dispatch = useDispatch();
  function onSelectCategorieHeader(category,subcategory,filter) {
    dispatch(toggleMenu(false));
    onSelectCategory(category,subcategory,filter)
  }
  return(
    <li className={classnames("catalog__menu-item",{'catalog__menu-item--small':isSmall})}><Link to="/catalog" onClick={()=>{onSelectCategorieHeader(category,subCategory,filter)}}>{name}</Link></li>
  )
}
export default HeaderCategorie;
