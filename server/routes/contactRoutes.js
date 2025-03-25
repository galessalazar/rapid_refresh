const express = require("express");
const router = express.Router();


const sequelize = require("../controllers/connection");

// why cant i do /models/Contact
const { Contact } = require("../models");
console.log(Contact)

router.post("/contacts", async (req, res) => {
  try {
    //    const { contactName, contactEmail, contactMessage } = req.body;
    const newContact = await Contact.create(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error submitting contact form", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//     );

//         res.status(201).json({ message: 'Contact submitted successfully!', contact: newContact })
//     } catch (error) {
//         console.error('Error saving contact data:', error);
//         res.status(500).json({ message: 'Failed to submit contact form'});
//     }
// });

module.exports = router;
