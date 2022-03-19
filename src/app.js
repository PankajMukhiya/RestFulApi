const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
require("../src/db/dbConnection");
const router = require("../src/routers/menRouter");

//here: app.use(express.json()) used becoz of req.body data store in json formate
app.use(express.json());

// routers
app.use(router);

// server
app.listen(port, () => {
  console.log(`Connection is listen at successfully : ${port}`);
});
