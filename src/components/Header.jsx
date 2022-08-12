import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="header__wrapper">
            <div className="header__block info">
              <div className="catalog">
                <button>
                  <svg className="svg--transparent " width="24" height="24">
                    <use xlinkHref="#menu"></use>
                  </svg>
                </button>
                <div className="catalog__menu hide">
                  <div className="catalog__menu-head">
                    <div className="back">
                      <button>
                        <svg
                          className="svg--transparent "
                          width="8"
                          height="14"
                        >
                          <use xlinkHref="#back"></use>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <div className="message">
                        <button>
                          <svg
                            className="svg--transparent "
                            width="24"
                            height="24"
                          >
                            <use xlinkHref="#message"></use>
                          </svg>
                        </button>
                      </div>
                      <div className="search">
                        <button>
                          <svg
                            className="svg--transparent "
                            width="24"
                            height="24"
                          >
                            <use xlinkHref="#search"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <ul className="catalog__menu-list">
                    <li className="catalog__menu-item">
                      Кухонные ножи TUOTOWN
                    </li>
                    <li className="catalog__menu-item">
                      Складные ножи TUOTOWN
                    </li>
                    <li className="catalog__menu-item">Кухонные ножи QXF</li>
                    <li className="catalog__menu-item">Точильные камни</li>
                    <li className="catalog__menu-item">Наборы для BBQ</li>
                    <li className="catalog__menu-item">
                      Кухонные принадлежности
                    </li>
                    <li className="catalog__menu-item">Туристические товары</li>
                    <li className="catalog__menu-item catalog__menu-item--small">
                      Новости
                    </li>
                    <li className="catalog__menu-item catalog__menu-item--small">
                      О компании
                    </li>
                    <li className="catalog__menu-item catalog__menu-item--small">
                      Контакты
                    </li>
                    <li className="catalog__menu-item catalog__menu-item--small">
                      Как проехать
                    </li>
                  </ul>
                </div>
              </div>
              <div className="locate">
                <svg className="svg--transparent" width="18" height="22">
                  <use xlinkHref="#locate"></use>
                </svg>
              </div>
              <div className="phone">
                <a className="phone__text" href="tel: 81134567890">
                  8 113 456-78-90
                </a>
                <a className="phone__svg" href="tel: 81134567890">
                  <svg className="svg--transparent" width="22" height="22">
                    <use xlinkHref="#phone"></use>
                  </svg>
                </a>
              </div>
              <div className="cart info__cart">
                <svg className="svg--transparent" width="19" height="20">
                  <use xlinkHref="#cart"></use>
                  <div className="cart__count"></div>
                  <div className="cart__circle"></div>
                </svg>
              </div>
            </div>
            <div className="header__block logo">
              <Link to="/">
                <img src={Logo} alt="logo"></img>
              </Link>
            </div>
            <div className="header__block user">
              <div className="cart">
                <Link to="/cart">
                  <svg className="svg--transparent" width="19" height="20">
                    <use xlinkHref="#cart"></use>
                    <div className="cart__count"></div>
                    <div className="cart__circle"></div>
                  </svg>
                </Link>
              </div>
              <div className="message">
                <a>
                  <svg className="svg--transparent" width="24" height="23">
                    <use xlinkHref="#message"></use>
                    <div className="message__count"></div>
                    <div className="message__circle"></div>
                  </svg>
                </a>
              </div>
              <div className="search">
                <button>
                  <svg className="svg--transparent" width="24" height="23">
                    <use xlinkHref="#search"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
