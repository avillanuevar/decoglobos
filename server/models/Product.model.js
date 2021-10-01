const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    description: String,
    imageUrl: String,
    productType: {
      type: String,
      default: "balloon",
      enum: ["balloon", "flowers","decorations"]
    },
    price:Number,
    size: {
      type: String,
      default: "M",
      enum: ["XS", "S","M","L","XL"]
    }
    },
  {
    timestamps: true
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;