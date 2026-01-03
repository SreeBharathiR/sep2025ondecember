const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
dotenv.config();

const app = express();
console.log(process.env.PORT);
// locate a location , listen- server

app.listen(process.env.PORT, () => {
  console.log("server is running on port 5000");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Server connected to this port number 5000" });
});

const DBConnection = async () => {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connect ", error);
  }
};

DBConnection();

// connect(process.env.MONGODB_URL)
//   .then(() => {
//     console.log("Database connected successfully");
//   })
//   .catch((error) => {
//     console.log("Error while connect ", error);
//   });
