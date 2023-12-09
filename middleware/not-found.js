// Customize not found page for not found route
const notFoundMiddleware = (req, res) => {
  return res
    .status(404)
    .send("<h1>Route cannot be found</h1><a href='/'>Go Back Home</a>");
};

module.exports = notFoundMiddleware;
