import Product from "../models/Product.js";


export const getAllProducts = async (req, res) => {
  const allProducts = await Product.find();
  res.status(200).json({
    success: true,
    data: allProducts,
  });
}

export const createProduct = async (req, res) => {
    let {title, description, images, quantity, price} = req.body;

    if(!title || !description || !quantity || !price){
        return res.status(400).json({
            success: false,
            message: "All Fields are required"
        })
    }

    if(!images){
        return res.status(400).json({
            success: false,
            message: "Please Provide a image for Product"
        })
    }

    const newProduct = new Product({
        title, description, images, quantity, price
    });
    const svdProduct = await newProduct.save();

    console.log(svdProduct);

    return res.status(201).json({
        success: true,
        message: "Product Successfully created",
        product: {
            title: svdProduct.title,
            description: svdProduct.description,
            images: svdProduct.images,
            quantity: svdProduct.quantity,
            price: svdProduct.price
        }
    });
}