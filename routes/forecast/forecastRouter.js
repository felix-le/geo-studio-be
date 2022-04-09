const express = require('express');
const router = express.Router();
const ForecastCtrl = require('../../controllers/forecasts.controller');

router.get('/', ForecastCtrl.getForecast);

module.exports = router;
