const express = require("express");
const {
  getProducts,
  createProduct,
} = require("../controller/productsController");
const productRouter = express.Router();

productRouter.get("/:id?", getProducts);
productRouter.post("/", createProduct);
module.exports = productRouter;
