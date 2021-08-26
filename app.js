const express = require("express");
const app = express();
const db = require("./db/models/index");
const pokemonRouter = require("./routes/pokemon.route");
db.sequelize.sync();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json());
app.use("/pokemon", pokemonRouter);

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).send(err.message);
});
module.exports = app;
