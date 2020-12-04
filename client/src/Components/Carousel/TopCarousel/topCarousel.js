import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import { Link, BrowserRouter as Router } from "react-router-dom";

import TopCarouselCard from "../TopCarouselCard/topCarouselCard";
import BackgroundImage from "../../../media/img/TopCard1.png"

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

import "./topCarousel.css"

class TopCarrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards:[
        {
        imgUrl:BackgroundImage,
        title:'Envía buena vibra',
        subTitle:'Envios a todo Madrid'
        },
        {
          imgUrl:BackgroundImage,
          title:'Envía buena vibraDos',
          subTitle:'Envios a todo Madrid'
        },
        {
          imgUrl:BackgroundImage,
          title:'Envía buena vibraTres',
          subTitle:'Envios a todo Madrid'
        }
    ],
    }
  }

  render() {
    return  (
  
        <div className='hostTC'>
          <Carousel>
            {this.state.cards.map(card => (
              <Carousel.Item>
                <TopCarouselCard card={card}/>
              </Carousel.Item>
              )  
              )}
           </Carousel>

          
        </div>

    );
  }}

export default TopCarrusel;
