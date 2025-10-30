import mongoose from "mongoose";
import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      data: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server ERROR",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    let { title, description, images, quantity, price } = req.body;

    if (!title || !description || !quantity || !price) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required",
      });
    }

    if (!images) {
      return res.status(400).json({
        success: false,
        message: "Please Provide a image for Product",
      });
    }

    const newProduct = new Product({
      title,
      description,
      images,
      quantity,
      price,
    });
    const svdProduct = await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product Successfully created",
      svdProduct,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server ERROR",
    });
  }
};

export const getproductDetails = async(req, res) => {
  try{
    const product = await Product.findById(req.params.id);

    if(!product){
      res.status(404).json({
        success: false,
        message: "Product NOT Found!",
      })
    }

    res.status(200).json({
      success: true,
      message: "Product details",
      product,
    })
  }catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server ERROR",
    });
  }
}

export const updateProduct = async (req, res) => {
  try {
    let { id } = req.params;

    const productToBeUpdated = await Product.findById(id);
    console.log("Product TO Be Updated : ", productToBeUpdated);

    if (!productToBeUpdated) {
      return res.status(404).json({
        success: false,
        message: "404: Product NOT Found!",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      { new: true }
    );

    console.log("Updated Product : ", updatedProduct);

    return res.status(201).json({
      success: true,
      message: "Product Updated Successfully",
      updatedProduct,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server ERROR",
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "NO Product Found!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
      deletedProduct,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server ERROR",
    });
  }
};