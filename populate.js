const express = require("express");

require("dotenv").config();

const connectDB = require("./db/connect");

const laptopCollection = require("./models/Laptops");

const allLaptops = require("./laptops.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await laptopCollection.deleteMany();
    await laptopCollection.create(allLaptops);
    console.log("Created");
  } catch (error) {
    console.log(error);
  }
};
start();
