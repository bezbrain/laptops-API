const errorHandlerMiddleware = async (err, req, res, next) => {
  return res.status(500).json({
    success: false,
    message: err,
  });
};

module.exports = errorHandlerMiddleware;
