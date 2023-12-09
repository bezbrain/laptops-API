const express = require("express");
const app = express();

// The dynamic port
const port = process.env.PORT || 3000;

// MIDDLEWARE
// Not-found route
const notFoundMiddleware = require("./middleware/not-found");

app.get("/", (req, res) => {
  res.send(
    "<h1>This is the home page</h1><a href='/api/v1/products'>Go to Product Page</a>"
  );
});

app.use(notFoundMiddleware);

// Start the server
app.listen(port, console.log(`Server is listening on port ${port}`));