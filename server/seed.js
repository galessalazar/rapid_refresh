const  Service  = require('./models/Service')
const { db } = require('./controllers/connection')

async function seedService() {
    try{
        await Service.bulkCreate([
            {
                serviceName: 'Fresh Start Clean',
                serviceDescription: 'Sanitizing of areas to include countertops, restrooms, and bedrooms.',
                costOfService: 150, 
                estimatedTime: 3 
            },
            {
                serviceName: 'Deep Refresh',
                serviceDescription: 'Fresh Start Clean plus kitchen detail to include dishes, refrigerator and microwave.',
                costOfService: 250, 
                estimatedTime: 4 
            },
            {
                serviceName: 'Ultimate Clean',
                serviceDescription: 'Deep Refresh plus laundry detail. Full laundry service includes wash/dry/fold/hang. Customer preferences to be discussed prior to start and all cleaning supplies to be provided by me, with additional charge for laundry cleaning supplies. Optional: you may provide your own laundry cleaning supplies to waive additional fees.',
                costOfService: 350, 
                estimatedTime: 5 
            }
        ])

        console.log('Seeded!')
    } catch (error) {
        console.error('Error seeding:', error);
    }
}

seedService();