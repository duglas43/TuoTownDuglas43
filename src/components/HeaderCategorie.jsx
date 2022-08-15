import React from "react";
import classnames from "classnames";
function HeaderCategorie({name,isSmall}){
  return(
    <li className={classnames("catalog__menu-item",{'catalog__menu-item--small':isSmall})}>{name}</li>
  )
}
export default HeaderCategorie;
