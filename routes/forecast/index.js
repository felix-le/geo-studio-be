const express = require('express');
const router = express.Router();
const forecastRoutes = require('./forecastRouter');

router.use('/', forecastRoutes);

module.exports = router;
