import React from "react";
import TestImage from "../assets/img/image_17.png";
function CartProduct(){
  return (
    <li className="cart-product">
        <div className="container">
          <div className="row justify-content-between cart-product__inner">
            <div className="col col-md-5 cart-product__left">
              <img src={TestImage} alt="Изображение товары" className="cart-product__img me-4" width={"50"} height={"auto"}/>
              <p className="cart-product__name">Складной нож SQ01-B</p>
            </div>
            <div className="col col-md-5 cart-product__right">
              <div className="cart-product-counter">
                <button className="cart-product-counter__btn me-4">-</button>
                <p className="cart-product-counter__main">4</p>
                <button className="cart-product-counter__btn ms-4 me-4">+</button>
                <p className="cart-product__price">1500 р.</p>
              </div>
              <button className="cart-product__delete"><i className="fa-solid fa-xmark greytext"></i></button>
            </div>
          </div>
        </div>
    </li>
  )
}
export default CartProduct;