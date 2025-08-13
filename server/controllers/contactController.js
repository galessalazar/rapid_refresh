const { Contact } = require('../models');
const jwt = require('jsonwebtoken');

const handleContactSubmission = async (req, res) => {
  try {
    // Get the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Verify the token and get user data
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user is an owner
    // if (!decoded.isOwner) {
    //   return res.status(403).json({ message: 'Only owners can submit contact forms' });
    // }

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create contact submission in database
    // await Contact.create({
    //   name,
    //   email,
    //   message
    // });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in contact submission:', error);
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token' });
    }
    res.status(500).json({ message: 'Failed to send message' });
  }
};

module.exports = {
  handleContactSubmission
}; 