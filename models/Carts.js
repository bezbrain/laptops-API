const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  desc: {
    type: String,
    required: [true, "Description cannot be empty"],
  },
  price: {
    type: Number,
    required: [true, "Price cannot be empty"],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Carts", CartSchema);
