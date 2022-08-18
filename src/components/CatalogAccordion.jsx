import React from "react";
import { Accordion } from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {setCategory,} from "../redux/actions/categories";
import { fetchCatalogProducts} from "../redux/actions/catalogProducts";
import categoryList from "../data/CategoryList.js";
import classnames from "classnames";
function CatalogAccordion() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.category);
  const subCategory= useSelector(state => state.categories.subCategory);
  function onClickAccordionItem(category, subCategory){
    let filter=categoryList.find(item=>item.category===category&&item.subCategory===subCategory).filter;
    dispatch(setCategory(category, subCategory))
    dispatch(fetchCatalogProducts(filter));
  }
  return (
    <Accordion activeKey={String(category)} className="text-white">
      <Accordion.Item eventKey="-1" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(-1,0);}}>
        <Accordion.Header>НОВИНКИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===-1 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(-1,0)}}>
            Новинки
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,0)}}>
        <Accordion.Header>НОЖИ</Accordion.Header>
        <Accordion.Body>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,0)}}>
            КУХОННЫЕ НОЖИ TUOTOWN
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===1})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,1)}}>
            КУХОННЫЕ НОЖИ QXF
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===0 && subCategory===2})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(0,2)}}>
            СКЛАДНЫЕ НОЖИ
          </button>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,0)}} >
        <Accordion.Header>Аксессуары</Accordion.Header>
        <Accordion.Body>
          <button type="button"className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===0})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,0)}}>
            Точильные камни
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===1})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,1)}}>
            Наборы для BBQ
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===2})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,2)}}>
            Кухонные принадлежности
          </button>
          <button type="button" className={classnames("catalog__btn d-block",{'accordion-active':category===1 && subCategory===3})} onClick={(e)=>{e.stopPropagation();onClickAccordionItem(1,3)}}>
            Туристические товары
          </button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default CatalogAccordion;
