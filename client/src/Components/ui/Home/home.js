import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import TopCarousel from "../../Carousel/TopCarousel/topCarousel";
import BottomCarousel from "../../Carousel/BottomCarousel/bottomCarousel";
import FooterContact from "../../Contact/FooterContact/footerContact";

import arco from "../../../media/img/home/arcoHome.svg";
import globos from "../../../media/img/home/globos.svg"
import flores from "../../../media/img/home/flores.svg"
import postres from "../../../media/img/home/postres.svg"
import regalos from "../../../media/img/home/regalos.svg"
import cheap from "../../../media/img/home/20oMenos.svg"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
   
  }

  render() {
    return  (
  
        <div className='home'>
          <TopCarousel/>
          <div className='homeContent'>
            <section className='topSection'>
              <h3>ENTREGAS DE LUNES A DOMINGO</h3>
              <div className='introSubSection'>
                <div className='intro'>
                <img src={arco} alt="" />
                </div>
                <div className='intro center'>
                  <div>
                    <p>Globos. Arreglos. Postres</p>
                    <p>Para regalar o</p>
                    <p className='variation'>decorar</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='linkDisplay'>
              <div className='boxLinks'>
                <div className='boxLink'>
                  <Link>
                    <img src={globos} alt=""/>
                    <p>Globos</p>
                  </Link>

                </div>
                <div className='boxLink'>
                  <Link>
                    <img src={flores} alt=""/>
                    <p>Flores</p>
                  </Link>
                </div>
                <div className='boxLink'>
                  <Link>
                    <img src={postres} alt=""/>
                    <p>Postres</p>
                  </Link>
                </div>
                <div className='boxLink'>
                < Link>
                    <img src={regalos} alt=""/>
                    <p>Regalos</p>
                  </Link>
                </div>
              </div>
              <div className='elongatedLink'>
                < Link>
                  <img src={cheap} alt=""/>
                  <span className='textLink'>Menos de </span><span className='numberLink'>20€</span>
                </Link>
              </div>
            </section>
            <BottomCarousel/>
            <FooterContact/>
          </div>
          
        </div>

    );
  }}

export default Home;
