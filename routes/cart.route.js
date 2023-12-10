const express = require("express");
const router = express.Router();

const {
  createLaptop,
  getAllLaptopsCart,
} = require("../controllers/cart.controller");

router.post("/", createLaptop);
router.get("/", getAllLaptopsCart);

module.exports = router;
