import React from "react";
import { Carousel } from "react-bootstrap";
import catalogImg from "../assets/img/unsplash.webp";
import { CatalogAccordion, ProductBlock } from "../components";
import TestImage from "../assets/img/image_17.png";
const products = [
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
  {
    image: TestImage,
    title: "Тестовый нож",
    price: "850",
    isNew: true,
  },
];
function Catalog() {
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
        <h1>Ножи</h1>
        <div className="row">
          <div className="col-md-4">
            <CatalogAccordion />
          </div>
          <div className="col-md">
            <div className="products grid-container--32">
              <h2 className="visually-hidden" hidden>
                Товары
              </h2>
              {products.map((item, index) => {
                return <ProductBlock key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catalog;
