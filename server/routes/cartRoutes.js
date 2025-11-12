import express from "express";
import {
  addItem,
  allItems,
  removeItem,
  updateQuantity,
} from "../controllers/cartController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router({});

// get all CartItems
router.get("/all", isAuthenticated, allItems);

// Add Item in Cart
router.post("/add", isAuthenticated, addItem);

// Update Item in Cart
router.patch("/update/:id", isAuthenticated, updateQuantity);

//Remove Item from Cart
router.delete("/remove/:id", isAuthenticated, removeItem);

export default router;
