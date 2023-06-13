const express = require("express");
const app = express();
const port = 3000;
const productRouter = require("./routes/productsRouter");
const providersRouter = require("./routes/providersRouter");

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/providers", providersRouter);

app.listen(port, () => {
  console.info(`Servidor escuchando el puerto ${port}`);
});
