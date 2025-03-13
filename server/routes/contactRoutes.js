const express = require('express');
const router = express.Router();

// why cant i do /models/Contact
const  {Contact}  = require('../models')

router.post('/contacts', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = await Contact.create({
            name, 
            email, 
            message
        });

        res.status(201).json({ message: 'Contact submitted successfully!', contact: newContact })
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ message: 'Failed to submit contact form'});
    }
});

module.exports = router;
