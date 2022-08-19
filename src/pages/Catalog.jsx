import React from "react";
import { Carousel } from "react-bootstrap";
import catalogImg from "../assets/img/unsplash.webp";
import { CatalogAccordion, ProductBlock, ProductLoadingBlock } from "../components";
import {useSelector, useDispatch} from "react-redux";
import categoryList from "../data/CategoryList.js";
import {fetchCatalogProducts} from "../redux/actions/catalogProducts";
function Catalog() {
  const dispatch = useDispatch();
  let catalogProducts = useSelector(state => state.catalogProducts.items);
  let isLoaded = useSelector((state) => state.catalogProducts.isLoaded);
  let categories= useSelector(state => state.categories);
  let subCategoryName=categoryList.find(item =>item.category===categories.category&&item.subCategory===categories.subCategory).subCategoryName;
  React.useEffect(() => {
    catalogProducts.length||dispatch(fetchCatalogProducts("isNew=true"));
  },[]);
  return (
    <div className="catalog">
      <Carousel interval={null} controls={false} indicators={false}>
        <Carousel.Item>
          <img className="d-block" src={catalogImg} alt="First slide"></img>
          <Carousel.Caption className="catalog__caption">
            <h3>ДОМ И НОЖИ</h3>
            <p>Эксклюзивные технологии на страже чистоты и уюта в вашем доме</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <h1>{subCategoryName}</h1>
        <div className="row">
          <div className="col-md-4">
            <CatalogAccordion />
          </div>
          <div className="col-md">
            <div className="products grid-container--32">
              <h2 className="visually-hidden" hidden>
                Товары
              </h2>
              {isLoaded
                ? catalogProducts.map((item, index) => {
                    return <ProductBlock key={index} productObj={item} />;
                  })
                : Array(3)
                    .fill(0)
                    .map((_, index) => <ProductLoadingBlock key={index} customWidth={250} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalog;
