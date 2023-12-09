const LaptopCollection = require("../models/Laptops");

const getAllLaptops = async (req, res) => {
  console.log(req.query);
  const { name, price, inStock, sort, select } = req.query;
  const queryObject = {};

  //   Searching for a product by name, price and stock status
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (price) {
    queryObject.price = parseInt(price);
  }
  if (inStock) {
    queryObject.inStock = inStock === "true" ? true : false;
  }

  //   Do not add await here but only when data is ready to be sent
  let laptops = LaptopCollection.find(queryObject);

  // Sorting data in the db before sending as response
  if (sort) {
    const sortList = sort.split(",").join(" ");
    laptops = laptops.sort(sortList);
  }
  //   Select part of all the keys before sending as response
  if (select) {
    const selectList = select.split(",").join(" ");
    laptops = laptops.select(selectList);
  }

  laptops = await laptops;

  res.status(200).json({
    success: true,
    message: "All laptops successful fetched",
    nbHits: laptops.length,
    laptops,
  });
};

module.exports = { getAllLaptops };
