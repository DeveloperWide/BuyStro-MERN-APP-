import express from "express";
import {
  addItem,
  allItems,
  removeItem,
  updateQuantity,
} from "../controllers/cartController.js";
const router = express.Router({});

// get all CartItems
router.get("/all", allItems);

// Add Item in Cart
router.post("/add", addItem);

// Update Item in Cart
router.patch("/update/:id", updateQuantity);

//Remove Item from Cart
router.delete("/remove/:id", removeItem);

export default router;
