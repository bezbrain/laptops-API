const express = require("express");
const router = express.Router();

// Import controllers
const {
  createFav,
  getAllFav,
  deleteFromFav,
} = require("../controllers/fav.controller");

router.post("/", createFav);
router.get("/", getAllFav);
router.delete("/:favID", deleteFromFav);

// Export the route
module.exports = router;
