import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setCategory,} from "../redux/actions/categories";
import { fetchProducts } from "../redux/actions/products";
import classnames from "classnames";
function CatalogAccordion() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.category);
  const subCategory= useSelector(state => state.categories.subCategory);
  function onClickAccordionItem(category, subCategory,link){
    dispatch(setCategory(category, subCategory));
    dispatch(fetchProducts(link));
  }
  return (
    <Accordion activeKey={String(category)} className="text-white">
      <Accordion.Item eventKey="-1" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(-1,0,"isNew=true")}}>
        <Accordion.Header>НОВИНКИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===-1 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(-1,0,"isNew=true")}}>
            Новинки
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,0,"category=0")}}>
        <Accordion.Header>НОЖИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,0,"category=0")}}>
            КУХОННЫЕ НОЖИ TUOTOWN
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===1})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,1,"category=0")}}>
            КУХОННЫЕ НОЖИ QXF
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===2})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,2,"category=0")}}>
            СКЛАДНЫЕ НОЖИ
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,0,"category=1&subCategory=0")}} >
        <Accordion.Header>Аксессуары</Accordion.Header>
        <Accordion.Body>
          <button type="button"className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,0,"category=1&subCategory=0")}}>
            Точильные камни
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===1})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,1,"category=1&subCategory=1")}}>
            Наборы для BBQ
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===2})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,2,"category=1&subCategory=2")}}>
            Кухонные принадлежности
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===3})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,3,"category=1&subCategory=3")}}>
            Туристические товары
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default CatalogAccordion;
