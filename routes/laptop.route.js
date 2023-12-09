const express = require("express");
const router = express.Router();

// Import all controllers
const {
  getAllLaptops,
  getSingleLaptop,
} = require("../controllers/laptop.controller");

router.get("/", getAllLaptops);
router.get("/:laptopID", getSingleLaptop);

module.exports = router;
