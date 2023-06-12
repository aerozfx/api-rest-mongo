const mongoose = require("mongoose");
require("../utils/db_mongo");
const providersSchema = {
  cif: {
    type: String,
    required: true,
    unique: true,
  },
  company_name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  url_web: {
    type: String,
    required: true,
  },
};

// Creamos el esquema
const providerSchema = mongoose.Schema(providersSchema);
// Creamos el modelo
const Provider = mongoose.model("Providers", providerSchema);

module.exports = Provider;
