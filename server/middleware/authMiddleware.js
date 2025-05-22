const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Import User model here to avoid circular dependency
    const { User } = require('../models');
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

// Middleware to check if user is owner
const isOwner = (req, res, next) => {
  if (!req.user.isOwner) {
    return res.status(403).json({ message: 'Access denied. Owner only.' });
  }
  next();
};

module.exports = {
  authenticateToken,
  isOwner
}; 