import express from "express"
import { createProducts, getProducts, deleteProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/" , getProducts);

router.post("/", createProducts);

router.delete("/:id", deleteProducts);

router.put("/:id", updateProduct);

export default router;