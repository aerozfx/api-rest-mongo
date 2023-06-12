const { model } = require("mongoose");
const Provider = require("../models/providers");

const getProviders = async (req, res) => {
  if (req.params.cif) {
    try {
      let result = await Provider.find({ cid: req.params.id }, "-_id -__v");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  } else {
    try {
      let result = await Provider.find({}, "-_id -__v");
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

const createProvider = async (req, res) => {
  try {
    let { cif, company_name, address, url_web } = req.body;
    let result = new Provider({
      cif,
      company_name,
      address,
      url_web,
    });

    let response = await result.save();
    res.status(201).json({
      message: "Proveedor creado",
      provider: {
        response,
      },
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
module.exports = {
  getProviders,
  createProvider,
};
