const Product = require("../models/products.js");
const Provider = require("../models/providers.js");

const getProducts = async (req, res) => {
  if (req.params.id) {
    try {
      let result = await Product.find(
        { id: req.params.id },
        "-_id -__v -provider"
      ).populate("provider", "-_id company_name address");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  } else {
    try {
      let result = await Product.find({}, "-_id -__v -provider").populate(
        "provider",
        "-_id company_name address"
      );
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

const createProduct = async (req, res) => {
  try {
    let { id, title, price, description, image, provider } = req.body;
    let providerCompany = await Provider.find({ company_name: provider });
    let providerId = providerCompany[0]._id.toString();

    let product = new Product({
      id,
      title,
      price,
      description,
      image,
      provider: providerId,
    });
    let result = await product.save();
    res.status(201).json({
      message: "Producto creado",
      product: result,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  createProduct,
};
