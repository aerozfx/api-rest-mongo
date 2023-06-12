const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

// Donde nos vamos a conectar, a que BD. En este caso creará una BD nueva llamada "api-rest-mongodb"
mongoose.connect(
  "mongodb+srv://aerozfx:ICrGuXMdSwTWksSd@api-rest-mongo.x91qz0k.mongodb.net/",
  {
    // Opciones de la conexión
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose;
