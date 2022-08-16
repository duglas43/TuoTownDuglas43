import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setCategory} from "../redux/actions/categories";

function CatalogAccordion() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.category);
  const subCategory= useSelector(state => state.categories.subCategory);
  function onClickAccordionItem(eKey){
    dispatch(setCategory(eKey,0));
  }
  return (
    <Accordion activeKey={String(category)} className="text-white">
      <Accordion.Item eventKey="-1" onClick={()=>{onClickAccordionItem(-1)}}>
        <Accordion.Header>НОВИНКИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className="catalog__btn d-block">
            Ножи
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0" onClick={()=>{onClickAccordionItem(0)}}>
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
      <Accordion.Item eventKey="1" onClick={()=>{onClickAccordionItem(1)}}>
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
