import React from "react";
import Logo from "../assets/img/logo.svg";
import {useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/categories";
import {Link} from "react-router-dom";
function Footer() {
  const dispatch = useDispatch();
  function handleClick(category,subcategory) {
    dispatch(setCategory(category,subcategory));
  }
  return (
    <footer>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__column footer-about">
            <img src={Logo} alt="Логотип" />
            <span>
              легендарные ножи, <br /> создающие шедевры
            </span>
            <p>
              Компания «Tuotown» – эксклюзивный представитель профессиональных
              кухонных ножей, изготовленных лучшими мастерами Восточной Азии
              с применением передового европейского оборудования и современных
              материалов. <br /> <br />
              Они отличаются идеальным балансом и фантастической остротой.
              Сочетают в себе вековые традиции и новейшие разработки.
              Также предлагаем широкий ассортимент сопутствующих товаров.
            </p>
          </div>
          <div className="footer__column">
            <div className="footer-info">
              <p className="footer-info__title">Информация</p>
              <nav>
                <ul className="footer-nav">
                  <li className="footer-nav__item">
                    <button>Главная</button>
                  </li>
                  <li className="footer-nav__item">
                    <button>Новости</button>
                  </li>
                  <li className="footer-nav__item">
                    <button>О компании</button>
                  </li>
                  <li className="footer-nav__item">
                    <button>Контакты</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer-catalog">
              <div className="footer-catalog__title">Каталог</div>
              <ul className="footer-catalog__list">
                <li
                  className="footer-catalog__list-item"
                  onClick={() => {
                    handleClick(0, 0);
                  }}
                >
                  <Link to="/catalog">Кухонные ножи</Link>
                </li>
                <li
                  className="footer-catalog__list-item"
                  onClick={() => {
                    handleClick(0, 2);
                  }}
                >
                  <Link to="/catalog">Складные ножи</Link>
                </li>
                <li
                  className="footer-catalog__list-item"
                  onClick={() => {
                    handleClick(1, 0);
                  }}
                >
                  <Link to="/catalog">Точилки для ножей</Link>
                </li>
                <li
                  className="footer-catalog__list-item"
                  onClick={() => {
                    handleClick(1, 0);
                  }}
                >
                  <Link to="/catalog">Аксессуары</Link>
                </li>
              </ul>
            </div>
            <div className="social">
              <span>Мы в соцсетях</span>
              <ul className="social-links">
                <li className="social-item">
                  <button>
                    <svg className="svg--white" width="15" height="15">
                      <use xlinkHref="#facebook"></use>
                    </svg>
                  </button>
                </li>
                <li className="social-item">
                  <button>
                    <svg className="svg--white" width="15" height="15">
                      <use xlinkHref="#twitter"></use>
                    </svg>
                  </button>
                </li>
                <li className="social-item">
                  <button>
                    <svg className="svg--white" width="15" height="15">
                      <use xlinkHref="#linkedin"></use>
                    </svg>
                  </button>
                </li>
                <li className="social-item">
                  <button>
                    <svg className="svg--white" width="15" height="15">
                      <use xlinkHref="#facebook"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column footer-contacts">
            <p className="footer-contacts__title">Контактная информация</p>
            <button className="tel" href="tel:81134567890">
              +7 (000) 000-00-00
            </button>
            <button href="mailto:lorem@mail.ru" className="mail">
              tuotown@mail.ru
            </button>
            <p className="info">
              08:00 — 18:00, ежедневно <br />
              <br />
              Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70
            </p>
          </div>
        </div>
      </div>
      <div className="footer__dev">
        <div>
          <p>
            Dev. Duglas43 2022
            <button href="https://github.com/duglas43/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="svg"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
