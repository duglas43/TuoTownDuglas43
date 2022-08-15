import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {HeaderCategorie} from "../components";
import {useDispatch, useSelector} from "react-redux";
import setCategory from "../redux/actions/categories";
function Header() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  function toggleCatalog() {
    console.log(open)
    open ? setOpen(false) : setOpen(true);
  }
  let categorie__list=[
    {
      name:"КУХОННЫЕ НОЖИ TUOTOWN",
      type:0,
      isSmall:false,
    },
    {
      name:"СКЛАДНЫЕ НОЖИ TUOTOWN",
      type:0,
      isSmall:false,
    },
    {
      name:"КУХОННЫЕ НОЖИ QXF",
      type:0,
      isSmall:false,
    },
    {
      name:"ТОЧИЛЬНЫЕ КАМНИ",
      type:1,
      isSmall:false,
    },
    {
      name:"НАБОРЫ ДЛЯ BBQ",
      type:2,
      isSmall:false,
    },
    {
      name:"КУХОННЫЕ ПРИНАДЖЕЖНОСТИ",
      type:3,
      isSmall:false,
    },
    {
      name:"ТУРИСТИЧЕСКИЕ ТОВАРЫ",
      type:4,
      isSmall:false,
    },
    {
      name:"О КОМПАНИИ",
      type:4,
      isSmall:true,
    },
    {
      name:"О КОМПАНИИ",
      type:-1,
      isSmall:true,
    },
    {
      name:"НОВОСТИ",
      type:-1,
      isSmall:true,
    },
    {
      name:"КОНТАКТЫ",
      type:-1,
      isSmall:true,
    },
    {
      name:"КАК ПРОЕХАТЬ",
      type:-1,
      isSmall:true,
    },
  ]
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="header__wrapper">
            <div className="header__block info">
              <div className="catalog">
                <button onClick={toggleCatalog}>
                  <svg className="svg--transparent " width="24" height="24">
                    <use xlinkHref="#menu"></use>
                  </svg>
                </button>
                <div className={classnames("catalog__menu", { active: open })}>
                  <div className="catalog__menu-head">
                    <div className="back">
                      <button onClick={toggleCatalog}>
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
                      <div className="search" onClick={onSelectCategory(2)}>
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
                    {categorie__list.map((item,index)=>{
                      return(
                        <HeaderCategorie key={index} {...item}/>
                      )
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
