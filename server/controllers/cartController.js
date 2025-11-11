import Cart from "../models/Cart.js";

export const allItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({});

    return res.status(200).json({
      success: true,
      cartItems,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Eror",
    });
  }
};

export const addItem = async (req, res) => {
  try {
    const { Product, price, quantity } = req.body;
    if (!price || !Product || !quantity) {
      return res.status(400).json({
        success: false,
        message: "All fields are Required",
      });
    }
    console.log(req.body);
    const newItem = new Cart({
      items: [
        {
          ...req.body,
        },
      ],
    });

    const svdItem = await newItem.save();
    console.log(svdItem);
    return res.status(201).json({
      success: true,
      svdItem,
      message: "Item Added to cart Successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;
    const { id } = req.params;

    if (!quantity) {
      return res.status(400).json({
        success: false,
        message: "Quantity is required",
      });
    }

    const updatedCartItem = await Cart.findByIdAndUpdate(
      id,
      {
        quantity,
      },
      { new: true }
    );

    if (!updatedCartItem) {
      return res.status(404).json({
        success: false,
        message: "404: Item NOT Found",
      });
    }

    return res.status(200).json({
      success: false,
      updatedCartItem,
      message: "Quantity Successfully updated.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const removeItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deltedItem = await Cart.findByIdAndDelete(id);

    if (!deltedItem) {
      return res.status(404).json({
        success: false,
        message: "404: Item NOT Found",
      });
    }

    return res.status(200).json({
      success: true,
      removedItem: deltedItem,
      message: "Item Removed Successfully.",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
