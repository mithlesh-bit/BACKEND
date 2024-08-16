const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/sliderImage', imageController.sliderImage);

module.exports = router;

