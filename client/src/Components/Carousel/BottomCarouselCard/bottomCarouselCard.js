import React, { Component } from "react";

// import { Link, BrowserRouter as Router } from "react-router-dom";
import "./bottomCarouselCard.css"

class BottomCarruselCard extends Component {
  constructor(props) {
    super(props);
  
    
   
  }

  render() {
    let {card} = {...this.props}
    return  (

      <div className='hostBCC'>
        <div className='content'>
          <img src={card.imgUrl} alt=""/>
          <div className={`colorFade colorFade-${card.colorFade}`}></div>
          <div className='textBoxBCC'>
            <p>{card.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomCarruselCard;
