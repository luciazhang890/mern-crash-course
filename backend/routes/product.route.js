import express from "express";

import { getProduct, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProduct);
router.post('/', createProduct);
router.put("/:id", updateProduct); 
//:id is a dynamic parameter
router.delete("/:id", deleteProduct);

export default router;