const express = require("express");
const router = express.Router();

const {
  createLaptop,
  getAllLaptopsCart,
  deleteFromCart,
} = require("../controllers/cart.controller");

router.post("/", createLaptop);
router.get("/", getAllLaptopsCart);
router.delete("/:cartID", deleteFromCart);

module.exports = router;
