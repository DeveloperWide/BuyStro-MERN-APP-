import Cart from "../models/Cart.js";
import User from "../models/User.js";

/* export const allItems = async (req, res) => {
  try {
    if (!req.user.userId) {
      return res.status(404).json({
        success: false,
        message: "404: NO User Found",
      });
    }
    const cart = await Cart.findOne({ user: req.user.userId }).populate({
      path: "items.Product",
      select: "_id images title",
    });
    return res.status(200).json({
      success: true,
      cart,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Eror",
    });
  }
}; */

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

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "404: Cart NOT Found!, Login 0r Signup.",
      });
    }

    const existingItem = cart.items.find(
      (item) => item.Product.toString() === Product
    );

    if (existingItem) {
      return res.status(200).json({
        success: true,
        exists: true,
        item: existingItem,
        message: "Item Already Exist",
      });
    }

    cart.items.push(req.body);

    const svdItem = await cart.save();

    const item = svdItem.items.find(
      (item) => item.Product.toString() === Product
    );
    await item.populate({
      path: "Product",
      select: "_id images title",
    });

    return res.status(201).json({
      success: true,
      item,
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
    const { inc } = req.body;
    const { id } = req.params;

    if (inc === undefined) {
      return res.status(404).json({
        success: false,
        message: "inc (true/false) is required",
      });
    }

    // Find User
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "404: User not found",
      });
    }

    // Find Cart
    const cart = await Cart.findOne({ user });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "404: Cart Not Found",
      });
    }

    const itemToBeUpdated = cart.items.find((item) => item._id == id);

    if (!itemToBeUpdated) {
      return res.status(404).json({
        success: false,
        message: "404: Item NOT Found",
      });
    }

    if (inc) {
      itemToBeUpdated.quantity += 1;
    } else {
      itemToBeUpdated.quantity -= 1;
    }

    await cart.save();

    return res.status(200).json({
      success: false,
      updatedItem: itemToBeUpdated,
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

    // Find user
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find cart
    const cart = await Cart.findOne({ user });
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });
    }

    // Find the item to delete
    const deletedItem = cart.items.find((item) => item._id == id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "404: Item NOT Found",
      });
    }

    // Remove it
    cart.items = cart.items.filter((item) => item._id != id);

    await cart.save();

    return res.status(200).json({
      success: true,
      removedItem: deletedItem,
      message: "Item Removed Successfully.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
