import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../assets/img/slick__image_1.jpeg";
import slide2 from "../assets/img/slick__image_2.jpeg";
import slide3 from "../assets/img/slick__image_3.jpeg";
import slide4 from "../assets/img/slick__image_4.jpeg";

function Slider() {
  return (
      <Carousel interval={null}>
        <Carousel.Item  >
          <img
            className="d-block"
            src={slide1}
            alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Исключительное качество без компромиссов</h3>
              <p>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block "
            src={slide2}
            alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Исключительное качество без компромиссов</h3>
              <p>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block "
            src={slide3}
            alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Исключительное качество без компромиссов</h3>
              <p>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item  >
          <img
            className="d-block "
            src={slide4}
            alt="First slide"
            ></img>
            <Carousel.Caption>
              <h3>Исключительное качество без компромиссов</h3>
              <p>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}
export default Slider;