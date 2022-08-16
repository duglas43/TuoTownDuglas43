import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/products";
import {setCategory} from "../redux/actions/categories";
function CategoriesItem({ items }) {
  const dispatch = useDispatch();
  function handleClick(category) {
    dispatch(setCategory(category,0));
    dispatch(fetchProducts(`${category===0 ?"category=0":"category=1"}`));
  }
  return (
    <li className="categories-item" onClick={()=>{handleClick(items.category)}}>
      <Link to="/catalog">
        <p className="categories-item__image">
          <svg className="svg--disabled" width="54" height="46">
            <use xlinkHref={items.svgImage}></use>
          </svg>
        </p>
        <p className="categories-item__title">{items.title}</p>
      </Link>
    </li>
  );
}
export default CategoriesItem;
