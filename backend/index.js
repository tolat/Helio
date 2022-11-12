require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("../"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
