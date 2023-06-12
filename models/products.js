const mongoose = require("mongoose");
require("../utils/db_mongo");
const productsSchema = {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    validate: {
      validator: (imgUrl) => {
        if (imgUrl.indexOf(".jpg") !== -1 || imgUrl.indexOf(".png") !== -1) {
          return true;
        } else {
          return false;
        }
      },
      message: "Sólo imágenes JPG o PNG",
    },
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Provider",
    required: true,
  },
};

// Creamos el esquema
const productSchema = mongoose.Schema(productsSchema);
// Creamos el modelo
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
