const router = require('express').Router();
const { handleContactSubmission } = require('../../controllers/contactController');

router.post('/', handleContactSubmission);

module.exports = router; 