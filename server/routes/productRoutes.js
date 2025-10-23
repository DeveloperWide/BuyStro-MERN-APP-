import express from "express";
import Product from "../models/Product.js";
const router = express.Router();


router.get("/all", async (req, res) => {
    const allProducts = await Product.find();
    res.status(200).json({
        success: true,
        data: allProducts
    })
})

export default router;