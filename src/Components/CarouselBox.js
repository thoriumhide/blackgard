import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PicOne from '../assets/pic-1.jpg';
import PicTwo from '../assets/pic-2.jpg';
export default class CarouselBox extends Component {
  render() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PicOne}
            alt="Code"
          />
          <Carousel.Caption>
            <h3>Сеть</h3>
            <p>Создание сети.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PicTwo}
            alt="Code"
          />
          <Carousel.Caption>
            <h3>Сервер</h3>
            <p>Сборка серверов и настройка.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
