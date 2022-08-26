import React from "react";
import { PropTypes } from "prop-types";
function CartProduct({length, Obj,onAddProduct, onDelOneProduct,onDelWholeProduct}) {
  return (
    <li className="cart-product">
        <div className="container">
          <div className="row justify-content-between cart-product__inner">
            <div className="col col-md-5 cart-product__left">
              <img src={Obj.imageUrl ?? "https://placehold.it/50x50"} alt="Изображение товары" className="cart-product__img me-4" width={"50"} height={"auto"}/>
              <p className="cart-product__name">{Obj.name}</p>
            </div>
            <div className="col col-md-5 cart-product__right">
              <div className="cart-product-counter">
                <button className="cart-product-counter__btn me-4" onClick={()=>{onDelOneProduct(Obj.id)}}>-</button>
                <p className="cart-product-counter__main">{length}</p>
                <button className="cart-product-counter__btn ms-4 me-4" onClick={()=>{onAddProduct(Obj)}}>+</button>
                <p className="cart-product__price">{`${Obj.price*length} р.`}</p>
              </div>
              <button className="cart-product__delete" onClick={()=>{onDelWholeProduct(Obj.id)}}><i className="fa-solid fa-xmark greytext"></i></button>
            </div>
          </div>
        </div>
    </li>
  )
}
CartProduct.propTypes={
  length: PropTypes.number,
  obj:PropTypes.object,
  onAddProduct:PropTypes.func,
  onDelOneProduct:PropTypes.func,
  onDelWholeProduct:PropTypes.func
}
CartProduct.defaultProps={
  length: 1,
  obj:{
    imageUrl:"https://placehold.it/50x50",
  },
  onAddProduct:()=>{},
  onDelOneProduct:()=>{},
  onDelWholeProduct:()=>{}
}
export default CartProduct;