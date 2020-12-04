import React, { Component } from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";

import BGimage from '../../../media/img/contact/background.png'
import "./footerContact.css"

class FooterContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  _sendMail(){
    console.log('mail enviado')
  }

  render() {
    return  (
  
        <div className='hostFC'>
          <img src={BGimage} alt=""/>
          <div className='fadeBackground'></div>
          <div className='contentFC'>
            <p>¿Quieres conocer más acerca de nuestros servicios?</p>
            <h2>CONTÁCTANOS</h2>
            <form>
            <div className='imputBox'>
              <input className='imputsBorderTop' type="text" placeholder='Nombre'/>
            </div>
            <div className='imputBox'>
              <input type="text" placeholder='Correo electrónico'/>
            </div>
            <div className='imputBox'>
              <input className='imputsBorderBottom' type="text" placeholder='Telefono'/>
            </div>
            <div className='buttonFCBox'>
              <div className='buttonFC' onClick={this._sendMail}>
                ENVIAR
              </div>
            </div>
            </form>
          </div>
        </div>

    );
  }}

export default FooterContact;
