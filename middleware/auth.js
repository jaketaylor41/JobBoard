const jwt = require('jsonwebtoken');
const config = require('config');

// Export middleware function that has the req, res object available to it
module.exports = function(req, res, next) {

  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if no token - send 401
  if(!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token if there is one
  try {
    // Decode token through JWT
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    // Set the request.user to the user that is in the decoded token, can then use the decoded user in protected routes
    req.user = decoded.user;
    next();

  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}