const express = require('express');
const router = express.Router();
const  Service  = require('../models/Service');

router.get('/', async (req, res) => {
    try {
        const services = await Service.findAll();
        res.json(services);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})

router.post('/', async (req, res) => {
    try {
        const { serviceName, serviceDescription, costOfService, estimatedTime } = req.body;

        const newService = await Service.create({
            serviceName,
            serviceDescription,
            costOfService,
            estimatedTime
        })
        res.json(newService)
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error')
    }

})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { serviceName, serviceDescription, costOfService, estimatedTime} = req.body;

        const service = await Service.findByPk(id);
        if (!service) {
            return res.status(404).send('Service not found')
        }

        service.serviceName= serviceName || service.serviceName;
        service.serviceDescription = serviceDescription || service.serviceDescription;
        service.costOfService = costOfService || service.costOfService;
        service.estimatedTime= estimatedTime || service.estimatedTime;

        await service.save();
        res.json(service);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error')
    }
})

router.delete('/:serviceId', async (req, res) => {
    try {
        const { serviceId } = req.params;
        const service = await Service.findByPk(serviceId);

        if (!Service) {
            return res.status(404).send('Service not found');
        }

        await service.destroy();
        res.json({ message: 'Service deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})

module.exports = router;