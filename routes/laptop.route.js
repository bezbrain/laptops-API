const express = require("express");
const router = express.Router();

// Import all controllers
const { getAllLaptops } = require("../controllers/laptop.controller");

router.get("/", getAllLaptops);

module.exports = router;
