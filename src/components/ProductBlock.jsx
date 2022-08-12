import React from "react";
function ProductBlock({image,title,price,isNew}) {
  return (
    <div className="product">
      <div className="product__block">
        <img
          src={image}
          alt="Изображение товара"
          width="240"
          height="127"
          className="product__image"
        ></img>
        <div className="product__cart-add-wrap">
          <button type="button">
            <div className="product__cart-add">
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
      <div className="product__name">{title}</div>
      <div className="product__price">
        {price}<span className="isnew">{isNew ? "Новинка": ""}</span>
      </div>
    </div>
  );
}
export default ProductBlock;
