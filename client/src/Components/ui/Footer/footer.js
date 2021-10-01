import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css"

import footerImg from "../../../media/img/footer/footerImg.png";
import FBIcon from "../../../media/img/footer/FBIcon.png";
import IGIcon from "../../../media/img/footer/IGIcon.png";
import EmailIcon from "../../../media/img/footer/black-envelope.png";
import PhoneIcon from "../../../media/img/footer/call-answer.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 'home'
    };
  }

  _changeUrl(e) {
    let newUrl = e.currentTarget.id;
    this.props.changeLoation(newUrl)
    
  }

  render() {
    return  (
      <div className='footer'>
        <div className='left-section'>
          <div className='top-part'>
            <div className='contact-info-box'>
                <div className='contact-info'>
                  <img src={PhoneIcon} alt="icono de telefono"/>
                  <p className='footer-number'>+34 665611957</p>
                </div>
                <div className='contact-info'>
                  <img src={EmailIcon} alt="icono de email"/>
                  <p>decoglobosmadrid@gmail.com</p>
                </div>
            </div>
            <div className='footer-link-box'>
              <div className='footer-link-area'>
                <Link id='/' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/'?'selected-footer-link footer-link':'footer-link'} to='/'>Home</Link>
              </div>
              <div className='footer-link-area'>
                <Link id='/regalos' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/regalos'?'selected-footer-link footer-link':'footer-link'} to='/regalos'>Regalos</Link>
              </div>
              <div className='footer-link-area'>
                <Link id='/contactanos' onClick={this._changeUrl.bind(this)} className={this.props.location === '/contactanos'?'selected-footer-link footer-link':'footer-link'} to='/contactanos'>Contáctanos</Link>
              </div>
              <div className='footer-link-area'>
                <Link id='/decoraciones' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/decoraciones'?'selected-footer-link footer-link':'footer-link'} to='/decoraciones'>Decoracionse</Link>
              </div>
              <div className='footer-link-area'>
                <Link id='/sobreNosotros' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/sobreNosotros'?'selected-footer-link footer-link':'footer-link'} to='/sobreNosotros'>Sobre nosotros</Link>
              </div>
            </div>
          </div>
          <div className='bottom-part'></div>
        </div>
        <div className='right-section'>
          <img className='footerImg' src= {footerImg} alt="Manos agarrando globo amarillo con una cara feliz"/>
          <div className='footerIcons'>
            <img src={FBIcon} alt="Facebook icon"/>
            <img src={IGIcon} alt="Instagram icon"/>
          </div>
        </div>
      </div>
    );
  }}

export default Footer;