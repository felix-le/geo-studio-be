const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constant');
const corporateRouter = require('./corporate');
const communityRouter = require('./community');
const forecastRouter = require('./forecast');
const totalRouter = require('./total');

router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json(
      'Welcome to the studio PROJECT API. Lets begin with /api/corporate OR /api/community OR /api/forecast OR /api/total'
    );
});

router.use('/api/corporate', corporateRouter);
router.use('/api/community', communityRouter);
router.use('/api/forecast', forecastRouter);
router.use('/api/total', totalRouter);
module.exports = router;
