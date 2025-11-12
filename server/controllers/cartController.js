import Cart from "../models/Cart.js";
import User from "../models/User.js";

export const allItems = async (req, res) => {
  try {
    if (!req.user.userId) {
      return res.status(404).json({
        success: false,
        message: "404: NO User Found",
      });
    }
    const cartItems = await Cart.findOne({ user: req.userId });
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

    let cart = await Cart.findOne({ user: req.user.userId });

    console.log(cart);

    if (!cart) {
      console.log("Creating new Cart...");
      cart = new Cart({
        user: req.user.userId,
        items: [req.body],
      });
    } else {
      console.log("Updating Cart Items...");

      const existingItem = cart.items.find(
        (item) => item.Product.toString() === Product
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push(req.body);
      }
    }

    const svdItem = await cart.save();
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
    const user = await User.findById(req.user.userId);
    const cart = await Cart.findOne({ user });

    const itemToBeUpdated = cart.items.find((item) => item.id == id);
    console.log(itemToBeUpdated);

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
