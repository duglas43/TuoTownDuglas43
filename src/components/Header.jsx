import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {HeaderCategorie} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../redux/actions/categories";

function Header({onSelectCategory}) {
  const dispatch = useDispatch();
  const openMenu = useSelector(({categories}) => categories.openMenu);
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount,
  }));
  let categorie__list=[
    {
      name:"КУХОННЫЕ НОЖИ TUOTOWN",
      category:0,
      subCategory:0,
      filter:"category=0",
      isSmall:false,
    },
    {
      name:"СКЛАДНЫЕ НОЖИ TUOTOWN",
      category:0,
      subCategory:1,
      filter:"category=0",
      isSmall:false,
    },
    {
      name:"КУХОННЫЕ НОЖИ QXF",
      category:0,
      subCategory:2,
      filter:"category=0",
      isSmall:false,
    },
    {
      name:"ТОЧИЛЬНЫЕ КАМНИ",
      category:1,
      subCategory:0,
      filter:"category=1&subCategory=0",
      isSmall:false,
    },
    {
      name:"НАБОРЫ ДЛЯ BBQ",
      category:1,
      subCategory:1,
      filter:"category=1&subCategory=1",
      isSmall:false,
    },
    {
      name:"КУХОННЫЕ ПРИНАДЖЕЖНОСТИ",
      category:1,
      subCategory:2,
      filter:"category=1&subCategory=2",
      isSmall:false,
    },
    {
      name:"ТУРИСТИЧЕСКИЕ ТОВАРЫ",
      category:1,
      subCategory:3,
      filter:"category=1&subCategory=3",
      isSmall:false,
    },
    {
      name:"О КОМПАНИИ",
      category:-1,
      subCategory:0,
      filter:"isNew=true",
      isSmall:true,
    },
    {
      name:"О КОМПАНИИ",
      category:-1,
      subCategory:0,
      filter:"isNew=true",
      isSmall:true,
    },
    {
      name:"НОВОСТИ",
      category:-1,
      subCategory:0,
      filter:"isNew=true",
      isSmall:true,
    },
    {
      name:"КОНТАКТЫ",
      category:-1,
      subCategory:0,
      filter:"isNew=true",
      isSmall:true,
    },
    {
      name:"КАК ПРОЕХАТЬ",
      category:-1,
      subCategory:0,
      filter:"isNew=true",
      isSmall:true,
    },
  ]
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="header__wrapper">
            <div className="header__block info">
              <div className="catalog">
                <button
                  onClick={() => {
                    dispatch(toggleMenu(true));
                  }}
                >
                  <svg className="svg--transparent " width="24" height="24">
                    <use xlinkHref="#menu"></use>
                  </svg>
                </button>
                <div
                  className={classnames("catalog__menu", { active: openMenu })}
                >
                  <div className="catalog__menu-head">
                    <div className="back">
                      <button
                        onClick={() => {
                          dispatch(toggleMenu(false));
                        }}
                      >
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
                    {categorie__list.map((item, index) => {
                      return (
                        <HeaderCategorie
                          key={index}
                          onSelectCategory={onSelectCategory}
                          {...item}
                        />
                      );
                    })}
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
              <Link to="/cart">
                <span className="fa-layers  fa-fw" style={{"fontSize":"20px"}} >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="fa-layers-counter --fa-top-0 " data-fa-transform="--fa-top-10" style={{"background":"red"}}>
                        {totalCount}
                      </span>
                    </span>
              </Link>
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
                  <span className="fa-layers  fa-fw" style={{"fontSize":"20px"}} >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="fa-layers-counter --fa-top-0 " data-fa-transform="--fa-top-10" style={{"background":"red"}}>
                      {totalCount}
                    </span>
                  </span>
                </Link>
              </div>
              <div className="message">
                <Link to="#">
                  <svg className="svg--transparent" width="24" height="23">
                    <use xlinkHref="#message"></use>
                    <div className="message__count"></div>
                    <div className="message__circle"></div>
                  </svg>
                </Link>
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
