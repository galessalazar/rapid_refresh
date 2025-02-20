const express = require('express');
const router = express.Router();
const  Service  = require('../models/Service');

router.get('/service', async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})

module.exports = router;