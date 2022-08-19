import React from "react";
import { Slider, CategoriesItem, ProductBlock, ProductLoadingBlock } from "../components/";
import InfoImg from "../assets/img/info-img.jpg";
import InfoImg1 from "../assets/img/info-img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchActualHomeProducts,fetchHomeProducts,setActualTab } from "../redux/actions/home";
import classnames from "classnames";
const CategoryInfo = [
  {
    category:0,
    subcategory:0,
    svgImage: "#kitchen-knife",
    title: "Кухонные ножи",
    filter:"category=0",
  },
  {
    category:0,
    subcategory:2,
    svgImage: "#fold-knife",
    title: "Складные ножи",
    filter:"category=0",

  },
  {
    category:1,
    subcategory:0,
    svgImage: "#knife-sharpener",
    title: "Точилки для ножей",
    filter:"category=1&subCategory=0",
  },
  {
    category:1,
    subcategory:0,
    svgImage: "#kitchen-accessories",
    title: "Аксессуары для кухни",
    filter:"category=1&subCategory=0",
  },
];
function Home({onSelectCategory}) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchHomeProducts());
    dispatch(fetchActualHomeProducts("isNew=true"));
  }, []);
  const {isLoaded,isActualLoaded,items,actualItems,actualTab}=useSelector(({home})=>({
    isLoaded:home.isLoaded,
    isActualLoaded:home.isActualLoaded,
    items:home.items,
    actualItems:home.actualItems,
    actualTab:home.actualTab,
  }));
  function onActualClick(actualTab,link) {
    dispatch(setActualTab(actualTab));
    dispatch(fetchActualHomeProducts(link));
  }
  return (
    <main>
      <Slider></Slider>
      <div className="container">
        <h1 className="visually-hidden">Магазин TUOTOWN</h1>
        <section className="categories">
          <h2 className="visually-hidden">Категории</h2>
          <ul className="flex4">
            {CategoryInfo.map((item, index) => {
              return <CategoriesItem key={index} onSelectCategory={onSelectCategory} items={item} />;
            })}
          </ul>
        </section>
        <section className="products grid-container--42">
          <h2 className="visually-hidden" hidden>
            Товары
          </h2>
          {isLoaded
            ? items.map((item, index) => {
                return <ProductBlock key={index} productObj={item} />;
              })
            : Array(8)
                .fill(0)
                .map((_, index) => <ProductLoadingBlock key={index} customWidth={284}/>)}
        </section>
        <div className="email">
          <div className="email__title">
            Узнавайте первым о новинках и новостях
          </div>
          <div className="input-group-btn">
            <input
              type="text"
              placeholder="Ваш e-mail"
              className="email__input input"
            ></input>
            <button type="button" className="email__button input-button">
              <svg className="svg--transparent" width="8" height="12">
                <use xlinkHref="#arrow"></use>
              </svg>
            </button>
          </div>
        </div>
        <div className="grid-container--41 email-grid">
          {items.slice(0, 4).map((item, index) => {
            return <ProductBlock key={index} productObj={item} />;
          })}
        </div>
        <section className="actual">
          <h2 className="visually-hidden">Актуальные товары</h2>
          <div className="actual__tabs">
            <button
              className={classnames("actual__new", { active: actualTab === 0 })}
              onClick={() => {
                onActualClick(0, "isNew=true");
              }}
            >
              Новинки
            </button>
            <button
              className={classnames("actual__new", { active: actualTab === 1 })}
              onClick={() => {
                onActualClick(1, "category=1");
              }}
            >
              Популярное
            </button>
          </div>
          <div className="grid-container--41">
            {isActualLoaded
              ? actualItems.slice(0, 4).map((item, index) => {
                  return <ProductBlock key={index} productObj={item} />;
                })
              : Array(4)
                  .fill(0)
                  .map((_, index) => <ProductLoadingBlock key={index} customWidth={284}/>)}
          </div>
        </section>
        <section className="info-about">
          <h2 className="visually-hidden">Информация</h2>
          <div className="info1">
            <img
              src={InfoImg}
              alt="Изображение ножей"
              className="info__img info__img-1"
            />
            <div className="info__text">
              <p className="info__title">
                «Tuotown» – легендарные ножи,
                <br /> создающие шедевры
              </p>
              <p className="info__subtitle">
                Компания «Tuotown» – эксклюзивный представитель профессиональных
                кухонных ножей, изготовленных лучшими мастерами Восточной Азии с
                применением передового европейского оборудования и современных
                материалов.
                <br />
                <br /> Они отличаются идеальным балансом и фантастической
                остротой. Сочетают в себе вековые традиции и новейшие
                разработки. Также предлагаем широкий ассортимент сопутствующих
                товаров.
              </p>
            </div>
          </div>
          <div className="info2">
            <div className="info__text">
              Истинная красота ножа — совершённая функциональность и визуальная
              гармония. Этот предмет издревле сопутствовал человеку: от зари
              цивилизации до сегодняшних дней. На протяжении всей истории
              человечества он был верным помощником, незаменимым инструментом
              и грозным оружием. Предлагаем изделия Hi-end качества по доступным
              ценам настоящим ценителям японских ножей.
              <br />
              <br />
              Отличительной чертой нашего интернет-магазина являются уникальные
              торговые предложения, эксклюзивность продукции, неизменно высокое
              качество и выгодные цены. Осуществляем продажи элитных японских
              кухонных ножей для профессионалов и любителей. В обширной
              ассортиментной линейке представлены изделия для различных
              потребностей и любого бюджета — от столовых приборов до шеф-ножей.
              <br />
              <span className="info2__title">
                Ножи «Tuotown» – это главный инструмент поваров и секрет
                кулинарного мастерства
              </span>
            </div>
            <img
              src={InfoImg1}
              alt="Изображение ножей"
              className="info__img info__img-2"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
export default Home;
