import React from "react";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../redux/actions/cart";
function ProductBlock({productObj}) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <div className="product__block">
        <img
          src={productObj.imageUrl}
          alt="Изображение товара"
          width="240"
          height="127"
          className="product__image"
        ></img>
        <div className="product__cart-add-wrap" onClick={()=>{dispatch(addProductToCart(productObj))}}>
          <button type="button">
            <div className="product__cart-add" >
              <svg
                className="svg--transparent product__cart-add-plus"
                width="24"
                height="24"
              >
                <use xlinkHref="#plus"></use>
              </svg>
              <svg
                className="svg--transparent product__cart-add-cart"
                width="24"
                height="24"
              >
                <use xlinkHref="#cart"></use>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="product__name">{productObj.name}</div>
      <div className="product__price">
        {`${productObj.price} р.`}
        <span className="isnew">{productObj.isNew ? "Новинка" : ""}</span>
      </div>
    </div>
  );
}
export default ProductBlock;
