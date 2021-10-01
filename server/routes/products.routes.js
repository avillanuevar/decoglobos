const express = require("express");
const productRoutes = express.Router();
const Product = require("../models/Product.model");

productRoutes.post("/create", (req, res) => {
    const {
      description,
      productType,
      price,
      size,
      imageUrl
    } = req.body;
  
    Product.create({
        description,
        productType,
        price,
        size,
        imageUrl
    })
    .then(product => {
        res.json({ product });
    })
    .catch(err => console.log(err));
  });
  
  productRoutes.get("/details/:id", (req, res) => {
    const productId = req.params.id;
    Product.findById(productId)
      .then(product => res.json(product))
      .catch(err => console.log("DB error", err));
  });
  
  productRoutes.post("/edit", (req, res) => {
    const {
        description,
        productType,
        price,
        size,
        imageUrl,
        _id
    } = req.body;
  
    const productId = _id;
  
    Product.findByIdAndUpdate(
      productId,
      {
        description,
        productType,
        price,
        size,
        imageUrl
      },
      { new: true }
    )
      .then(product => res.json(product))
      .catch(err => console.log("DB error", err));
  });
  productRoutes.get("/delete/:id", (req, res) => {
    let productId = req.params.id;
    console.log(productId);
    Product.findByIdAndDelete(productId)
      .then((product) => {
        res.json(product)
      })
      .catch(err => console.log(err));
  });
  
  module.exports = productRoutes;
  