const mongoose = require("mongoose");

const db = "olympics";
const server = "localhost:27017";

mongoose
  .connect(`mongodb://${server}/${db}`)
  .then(() => {
    console.log("Connection with Database is Successfully");
  })
  .catch((error) => {
    console.log(`Error during connection with database is: ${error}`);
  });
