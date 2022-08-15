import React from "react";
import { Accordion } from "react-bootstrap";
function CatalogAccordion() {
  return (
    <Accordion activeKey="2"  className="text-white">
      <Accordion.Item eventKey="0">
        <Accordion.Header>НОВИНКИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className="catalog__btn d-block">
            Ножи
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>НОЖИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className="catalog__btn d-block">
            КУХОННЫЕ НОЖИ TUOTOWN
          </button>
          <button type="button" className="catalog__btn d-block">
            КУХОННЫЕ НОЖИ TUOTOWN
          </button>
          <button type="button" className="catalog__btn d-block">
            КУХОННЫЕ НОЖИ QXF
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Аксессуары</Accordion.Header>
        <Accordion.Body>
          <button type="button" className="catalog__btn d-block">
            Точильные камни
          </button>
          <button type="button" className="catalog__btn d-block">
            Наборы для BBQ
          </button>
          <button type="button" className="catalog__btn d-block">
            Кухонные принадлежности
          </button>
          <button type="button" className="catalog__btn d-block">
            Туристические товары
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default CatalogAccordion;
