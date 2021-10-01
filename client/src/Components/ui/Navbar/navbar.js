import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../media/logo/logo_1.svg"
import "./navbar.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goBa
    }
   
  }

  _changeUrl(e) {
    let newUrl = e.currentTarget.id;
    this.props.changeLoation(newUrl)
    console.log(window.location.pathname)
  }

  render() {
    return  (
      <>
        <div className='navbarDG'>
          <div>
            <img src={logo} alt="logo de Decoglobos" className='logo'/>
          </div>  
          <div className='link-box'>
            <div className='box'>
            <Link id='/' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/'?'selected link':'link'} to='/'>HOME</Link>
            </div>
            <div className='box'>
            <Link id='/decoraciones' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/decoraciones'?'selected link':'link'} to='/decoraciones'>DECORACIONES</Link>
            </div>
            <div className='box'>
            <Link id='/regalos' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/regalos'?'selected link':'link'} to='/regalos'>REGALOS</Link>
            </div>
            <div className='box'>
            <Link id='/sobreNosotros' onClick={this._changeUrl.bind(this)}  className={this.props.location === '/sobreNosotros'?'selected link':'link'} to='/sobreNosotros'>SOBRE NOSOTROS</Link>
            </div>
            <div className='box contact'>
            <Link id='/contactanos' onClick={this._changeUrl.bind(this)} className={this.props.location === '/contactanos'?'selected link':'link'} to='/contactanos'>CONTÁCTANOS</Link>
            </div>
          </div>
        </div>
      </>
    );
  }}

export default Navigation;
