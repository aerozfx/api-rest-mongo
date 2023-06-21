const express = require("express");
const helmet = require("helmet");
const app = express();
const port = 3000;
const productRouter = require("./routes/productsRouter");
const providersRouter = require("./routes/providersRouter");

app.use(express.json());
app.use(helmet());

app.use("/api/products", productRouter);
app.use("/api/providers", providersRouter);

app.get("/", (req, res) => {
  res.status(200).send(`<h2>Estos son algunos de los endpoints</h2>
  <ul>
  <li><a href="/api/products">/api/products</a></li>
  <li><a href="/api/providers">/api/providers</a></li>
  </ul>`);
});

app.listen(port, () => {
  console.info(`Servidor escuchando el puerto ${port}`);
});
