import React from "react";
import { CartProduct } from "../components/";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductToCart,
  delOneProduct,
  delWholeProduct,
} from "../redux/actions/cart";
import { Modal} from "react-bootstrap";
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import {Link} from "react-router-dom";



function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, cartItems } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    cartItems: cart.items,
  }));
  function onAddProduct(productObj) {
    dispatch(addProductToCart(productObj));
  }
  function onDelOneProduct(id) {
    dispatch(delOneProduct(id));
  }
  function onDelWholeProduct(id) {
    dispatch(delWholeProduct(id));
  }
  const [town, setTown] = React.useState("");
  const [value, setValue] = React.useState();
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    setTown(value.value)
  }
  const handleShowModal = () => setShowModal(true);
  return (
    <div className="cart__main">
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h1>Корзина</h1>
            <Link to="/catalog" className="cart-back col-3">
              <i className="fa-solid fa-arrow-left-long me-3"></i>К покупкам
            </Link>
          </div>
        </div>
        <div className="row cart-block">
          <ul className="cart-list col-12">
            {Object.entries(cartItems).map(([id, item]) => {
              return (
                <CartProduct
                  key={id}
                  Obj={item[0]}
                  length={item.length}
                  onAddProduct={onAddProduct}
                  onDelOneProduct={onDelOneProduct}
                  onDelWholeProduct={onDelWholeProduct}
                />
              );
            })}
          </ul>
          <div className="cart-end">
            <div className="container">
              <div className="row justify-content-end ">
                <div className="col col-md-2">
                  <p className="cart-end__text">К оплате:</p>
                  <p className="cart-end__price">{`${totalPrice} р.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-4 gy-4">
          <div className="col-sm-4 ship">
            <button type="button" onClick={handleShowModal} className="ship-logo me-2">
              <i className="fa-solid fa-2x fa-location-dot"></i>
            </button>
            <div className="modal">
              <Modal show={showModal} centered onHide={handleCloseModal}>
                <AddressSuggestions token="be7cbe3282e283e25593c66e8ebb9d6bdf664eea" value={value} onChange={setValue} count={4}/>
              </Modal>
            </div>
            <div>
              <p className="ship-title">Доставка</p>
              <p className="ship-info">
                {town ? town : "Выберите город"}
                <span className="ship-town"></span> {town ? "Дата доставки уточняется по телефону" : ""}
              </p>
            </div>
          </div>
          <div className="col-sm-4 payment">
            <button type="button" className="payment-logo me-2">
              <i className="fa-solid fa-2x fa-credit-card"></i>
            </button>
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
