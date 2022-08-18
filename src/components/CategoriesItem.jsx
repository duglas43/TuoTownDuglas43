import React from "react";
import { Link } from "react-router-dom";
function CategoriesItem({ items, onSelectCategory }) {
  return (
    <li className="categories-item">
      <Link to="/catalog" onClick={()=>{onSelectCategory(items.category,items.subcategory,items.filter)}}>
        <p className="categories-item__image">
          <svg className="svg--disabled" width="54" height="46">
            <use  xlinkHref={items.svgImage}></use>
          </svg>
        </p>
        <p className="categories-item__title">{items.title}</p>
      </Link>
    </li>
  );
}
export default CategoriesItem;
