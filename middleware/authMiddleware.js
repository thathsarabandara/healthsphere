const { findToken } = require('../models/Token');

const authMiddleware = async (req, res, next) => {
  const token = req.headers['token'];


  // Check if token exists in the request
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized Access, Please Login first!' });
  }

  try {
    // Validate the token using the async function
    const isTokenValid = await findToken(token);

    if (isTokenValid === null) {
      return res.status(401).json({ message: 'Unauthorized Access, Invalid token!' });
    }

    // If token is valid, proceed to the next middleware or route
    next();
  } catch (err) {
    // Handle errors that occur during token validation
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = authMiddleware;
