const express = require("express");
const app = express();
const cors = require("cors");

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Travel backend!!");
});

app.get("*", (req, res) => {
  res.send("Not Page");
});

module.exports = app;
