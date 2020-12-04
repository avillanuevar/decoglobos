import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../media/logo/logo_1.svg"
import "./navbar.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : 'home'
    }
   
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
            <Link onClick={()=>this.setState({selected:'home'})} className={this.state.selected === 'home'?'selected link':'link'} to='/'>HOME</Link>
            </div>
            <div className='box'>
            <Link onClick={()=>this.setState({selected:'decorations'})} className={this.state.selected === 'decorations'?'selected link':'link'} to='/decoraciones'>DECORACIONES</Link>
            </div>
            <div className='box'>
            <Link onClick={()=>this.setState({selected:'gifts'})} className={this.state.selected === 'gifts'?'selected link':'link'} to='/regalos'>REGALOS</Link>
            </div>
            <div className='box'>
            <Link onClick={()=>this.setState({selected:'aboutUs'})} className={this.state.selected === 'aboutUs'?'selected link':'link'} to='/sobreNosotros'>SOBRE NOSOTROS</Link>
            </div>
            <div className='box contact'>
            <Link onClick={()=>this.setState({selected:'contact'})} className={this.state.selected === 'contact'?'selected link':'link'} to='/contactanos'>CONTÁCTANOS</Link>
            </div>
          </div>
        </div>
      </>
    );
  }}

export default Navigation;
