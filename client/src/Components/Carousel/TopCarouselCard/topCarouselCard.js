import React, { Component } from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";
import "./topCarouselCard.css"

class TopCarruselCard extends Component {
  constructor(props) {
    super(props);
  
    
   
  }

  render() {
    let {card} = {...this.props}
    return  (
        <div className='hostTCC'>
          <img className='cardImg' src={card.imgUrl} alt=""/>
          <div className='container'>
            <div className='textContainer'>
              <p className='cardTitle'>{card.title}</p>
              <p className='cardSubTitle'>{card.subTitle}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default TopCarruselCard;
