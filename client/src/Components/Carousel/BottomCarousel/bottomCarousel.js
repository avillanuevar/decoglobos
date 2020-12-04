import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

import BottomCarouselCard from "../BottomCarouselCard/bottomCarouselCard";

import "./bottomCarousel.css"

import BCI1 from "../../../media/img/bottomCarousel/BCI1.png"
import BCI2 from "../../../media/img/bottomCarousel/BCI2.png"
import BCI3 from "../../../media/img/bottomCarousel/BCI3.png"

class BottomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[
        {
        imgUrl: BCI1,
        text: '¡Descubre nuestros GLOBOS y ramos perzonalizables para ese detalle lleno de magia!',
        colorFade: 'blue'
        },
        {
          imgUrl: BCI2,
          text: '¡Descubre nuestros GLOBOS y ramos perzonalizables para ese detalle lleno de magia!',
          colorFade: 'orange'
        },
        {
          imgUrl: BCI3,
          text: '¡Descubre nuestros GLOBOS y ramos perzonalizables para ese detalle lleno de magia!',
          colorFade: 'purple'
        }
    ],
    }
   
  }

  render() {
    return  (
  
        <div className='hostBC'>
            <Carousel>
            {this.state.cards.map(card => (
              <Carousel.Item>
              <BottomCarouselCard card={card}/>
              </Carousel.Item>
              )  
              )}
           </Carousel>
        </div>

    );
  }}

export default BottomCarousel;
