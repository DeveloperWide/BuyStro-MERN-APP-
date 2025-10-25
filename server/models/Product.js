import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product Title is Required"],
  },
  description: {
    type: String,
    required: [true, "Product Description is required"],
  },
  quantity: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
