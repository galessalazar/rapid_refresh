const express = require("express");
const router = express.Router();


const sequelize = require("../controllers/connection");

// why cant i do /models/Contact
const { Contact } = require("../models");
console.log(Contact)

const { authenticateToken, isOwner } = require('../middleware/authMiddleware');

// Handle contact form submission
router.post('/', authenticateToken, isOwner, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create contact submission in database
    await Contact.create({
      name,
      email,
      message
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error in contact submission:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
