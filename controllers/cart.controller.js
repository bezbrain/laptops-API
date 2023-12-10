const CartCollection = require("../models/Carts");

const createLaptop = async (req, res) => {
  const laptop = await CartCollection.create(req.body);
  res.status(201).json({
    success: true,
    message: "Laptop successfully added to cart",
    laptop,
  });
};

const getAllLaptopsCart = async (req, res) => {
  const laptops = await CartCollection.find({});
  res.status(200).json({
    success: true,
    nbHits: laptops.length,
    message: "All laptops in cart fetched",
    laptops,
  });
};

const deleteFromCart = async (req, res) => {
  const { cartID } = req.params;
  const laptop = await CartCollection.findOneAndDelete({ _id: cartID });
  if (laptop) {
    return res.status(200).json({
      success: true,
      message: "Laptop successfully removed from cart",
    });
  }
  res.status(404).json({
    success: true,
    message: `Laptop with the id, ${cartID} not found`,
  });
};

module.exports = { createLaptop, getAllLaptopsCart, deleteFromCart };
