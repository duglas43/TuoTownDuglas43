import React from "react";
import {CartProduct} from "../components/";
function Cart() {
  return (
    <div className="cart__main">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h1>Корзина</h1>
            <button className="cart-back col-3">
              <i class="fa-solid fa-arrow-left-long me-3"></i>К покупкам
            </button>
          </div>
        </div>
        <div className="row cart-block">
          <ul className="cart-list col-12">
            <CartProduct />
            <CartProduct />
          </ul>
          <div className="cart-end">
            <div className="container">
              <div className="row justify-content-end ">
                <div className="col col-md-2">
                  <p className="cart-end__text">К оплате:</p>
                  <p className="cart-end__price">1500 р.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-4 gy-4">
          <div className="col-sm-4 ship">
            <button type="button" className="ship-logo me-2"><i class="fa-light fa-2x fa-location-dot"></i></button>
            <div>
              <p className="ship-title">Доставка</p>
              <p className="ship-info"> <span className="ship-town">Саратовская обл</span> Дата доставки уточняется по телефону</p>
            </div>
          </div>
          <div className="col-sm-4 payment">
            <button type="button" className="payment-logo me-2"><i class="fa-light fa-2x fa-credit-card"></i></button>
            <div>
              <p className="payment-title">Оплата</p>
              <p className="payment-info">Выберите способ оплаты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
