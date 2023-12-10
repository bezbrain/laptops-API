const FavCollection = require("../models/Favourite");

const createFav = async (req, res) => {
  const laptop = await FavCollection.create(req.body);
  res.status(201).json({
    success: true,
    message: "Laptop successfully added to favourite",
    laptop,
  });
};

const getAllFav = async (req, res) => {
  const laptops = await FavCollection.find({});
  res.status(200).json({
    success: true,
    nbHits: laptops.length,
    message: "Successfully fetched all laptops from favourite",
    laptops,
  });
};

const deleteFromFav = async (req, res) => {
  const { favID } = req.params;
  const laptop = await FavCollection.findOneAndDelete({ _id: favID });
  if (laptop) {
    return res.status(200).json({
      success: true,
      message: "Laptop successfully deleted from favourite",
    });
  }
  res.status(404).json({
    success: true,
    message: `Laptop with the id, ${favID} not found`,
  });
};

module.exports = { createFav, getAllFav, deleteFromFav };
