const Service = require("./models/Service");
const { db } = require("./controllers/connection");

async function seedService() {
  try {
    await Service.bulkCreate([
      {
        serviceName: "Fresh Start Clean",
        serviceDescription:
          "Sanitizing focused on key areas including countertops, restrooms, and bedrooms.",
        costOfService: 180,
        estimatedTime: 3,
      },
      {
        serviceName: "Deep Refresh",
        serviceDescription:
          "Includes everything in Fresh Start Clean plus a detailed kitchen cleaning: dishes, refrigerator interior, microwave, and countertops.",
        costOfService: 250,
        estimatedTime: 4,
      },
      {
        serviceName: "Ultimate Clean",
        serviceDescription: `Includes
                
              - Fresh Start Clean (countertops, restrooms, bedrooms)

              - Kitchen detail (dishes, refrigerator, microwave)

              - Laundry detail: wash, dry, fold, and hang

              - Customer preferences discussed before starting

              - All cleaning supplies provided by me

              - Additional charge for laundry supplies unless you provide your own, which waives that fee`,

        costOfService: 350,
        estimatedTime: 6,
      },
    ]);

    console.log("Seeded!");
  } catch (error) {
    console.error("Error seeding:", error);
  }
}

seedService();
