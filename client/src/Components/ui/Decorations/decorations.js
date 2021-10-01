import React, { Component } from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";
import TopCarousel from "../../Carousel/TopCarousel/topCarousel";
import "./decorations.css"

import { button, Form } from "react-bootstrap";
import ProductService from "../../../services/products.service";
import FilesService from "../../../services/files.service";


class Decorations extends Component {
  constructor(props) {
    super(props);
    this._petService = new ProductService();
    this._filesService = new FilesService();
    this.state = {
      disabledbutton: false,
      buttonText: "Añadir producto",
      product: {
        description: "",
        productType: "",
        price: 0,
        size: "",
        imageUrl: ""
      }
    }
  }

  handleFileUpload = e => {
    this.setState({ disabledbutton: true, buttonText: "Subiendo imagen..." });

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this._filesService
      .handleUpload(uploadData)
      .then(response => {
        console.log(
          "Subida de archivo finalizada! La URL de Cloudinray es: ",
          response.data.secure_url
        );
        this.setState({
          disabledbutton: false,
          buttonText: "Añadir producto",
          product: { ...this.state.product, imageUrl: response.data.secure_url }
        });
      })
      .catch(err => console.log(err));
  };

  _handleInputChange = e => {
    let { name, value } = e.currentTarget;
    this.setState({
      product: { ...this.state.product, [name]: value }
    });
    console.log(e.currentTarget.value)
  }

  render() {
    return  (
        <div className='home'>
          <TopCarousel/>
          <div className='over-title-message'>
            <p>ENVÍA ARREGLOS Y REGALOS PARA CUALQUIER OCASIÓN</p>
          </div>
          <div className='decorations-title-box'>
            <h1>
              DECORACIONES
            </h1>
            <p>Nuestras decoraciones estan hechas a tu medida</p>
            <p>personalizadas para marcar tus recuerdos que te acopmpañaran el resto de tu vida</p>
          </div>
          <form className='form' action="" onSubmit={this._handleSubmit}>
            <Form.Label>picture</Form.Label>
              <Form.Control
                name="imageUrl"
                type="file"
                onChange={this.handleFileUpload}
              />
              <label htmlFor=""> descripcion</label>
              <input name='description' type="text" placeholder="descripcion" value={this.state.product.description} onChange={this._handleInputChange}/>
              <label> tipo de producto</label>
              <select name='productType' id="type-select" onChange={this._handleInputChange} value={this.state.product.productType}>
                <option value="">Ninguno</option>
                <option value="balloon">Globos</option>
                <option value="flowers">Flores</option>
                <option value="decoration">Decoracion</option>
              </select>
              <label>precio</label>
              <input type="number" name='price' onChange={this._handleInputChange} value={this.state.product.price}/>
              <label>tamaño</label>
              <select name='productType' id="type-select" onChange={this._handleInputChange} value={this.state.product.productType}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option selected={true} value="M">M</option>
                <option value="L">L</option>
                <option value="XL">L</option>
              </select>

          </form>
        </div>
    );
  }}

export default Decorations;
