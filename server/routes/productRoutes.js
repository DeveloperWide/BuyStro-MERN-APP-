import express from "express";
import { createProduct, deleteProduct, getAllProducts, getproductDetails, updateProduct } from "../controllers/productController.js";
const router = express.Router();

router.get("/all", getAllProducts);
router.post('/create', createProduct);
router.get('/:id', getproductDetails)
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
