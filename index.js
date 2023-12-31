const express = require("express");
const app = express();

// Import DB connection function
const connectDB = require("./db/connect");

// Import dotenv
require("dotenv").config();

// Import async error package for handling async and await
require("express-async-errors");

// The dynamic port
const port = process.env.PORT || 3000;

// Import Routes
const laptopRoute = require("./routes/laptop.route");
const cartRoute = require("./routes/cart.route");
const favRoute = require("./routes/fav.route");

// MIDDLEWARE
// Not-found route
const notFoundMiddleware = require("./middleware/not-found");
// Error handling
const errorHandlerMiddleware = require("./middleware/error-handling");
// Middleware to make the body available in req
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "<h1>This is the home page</h1><a href='/api/v1/laptops'>Go to Laptops Page</a><br/><a href='/api/v1/carts'>Go to Carts Page</a>"
  );
});

// Routes
app.use("/api/v1/laptops", laptopRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/fav", favRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// StartDB
const start = async () => {
  try {
    // Connect to DB
    await connectDB(process.env.MONGO_URI);
    // Start the server
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
