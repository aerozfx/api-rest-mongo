const express = require("express");
const {
  getProviders,
  createProvider,
} = require("../controller/providersController");
const providersRouter = express.Router();

providersRouter.get("/", getProviders);
providersRouter.post("/", createProvider);

module.exports = providersRouter;
