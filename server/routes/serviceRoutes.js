const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

router.get('/', async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        console.error('Error fetching services:', error);
        res.status(500).json({ message: 'Failed to fetch services', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { serviceName, serviceDescription, costOfService, estimatedTime } = req.body;

        // Validate required fields
        if (!serviceName || !serviceDescription || !costOfService || !estimatedTime) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Convert cost and time to numbers
        const cost = parseFloat(costOfService);
        const time = parseFloat(estimatedTime);

        // Validate numeric values
        if (isNaN(cost) || isNaN(time)) {
            return res.status(400).json({ message: 'Cost and time must be valid numbers' });
        }

        const newService = await Service.create({
            serviceName,
            serviceDescription,
            costOfService: cost,
            estimatedTime: time
        });

        res.status(201).json(newService);
    } catch (error) {
        console.error('Error creating service:', error);
        res.status(500).json({ message: 'Failed to create service', error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceName, serviceDescription, costOfService, estimatedTime } = req.body;

        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        // Convert cost and time to numbers if provided
        const cost = costOfService ? parseFloat(costOfService) : service.costOfService;
        const time = estimatedTime ? parseFloat(estimatedTime) : service.estimatedTime;

        // Validate numeric values
        if (isNaN(cost) || isNaN(time)) {
            return res.status(400).json({ message: 'Cost and time must be valid numbers' });
        }

        service.serviceName = serviceName || service.serviceName;
        service.serviceDescription = serviceDescription || service.serviceDescription;
        service.costOfService = cost;
        service.estimatedTime = time;

        await service.save();
        res.json(service);
    } catch (error) {
        console.error('Error updating service:', error);
        res.status(500).json({ message: 'Failed to update service', error: error.message });
    }
});

router.delete('/:serviceId', async (req, res) => {
    try {
        const { serviceId } = req.params;
        const service = await Service.findByPk(serviceId);

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        await service.destroy();
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service:', error);
        res.status(500).json({ message: 'Failed to delete service', error: error.message });
    }
});

module.exports = router;