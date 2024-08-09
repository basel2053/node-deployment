const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send("This is users tab");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
