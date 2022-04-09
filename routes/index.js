const express = require('express');
const router = express.Router();
const { statusConstants } = require('../constants/status.constant');
const corporateRouter = require('./corporate');

router.get('/', function (req, res, next) {
  res
    .status(statusConstants.SUCCESS_CODE)
    .json('Welcome to the studio PROJECT API. Lets begin with /api/corporate');
});

router.use('/api/corporate', corporateRouter);
module.exports = router;
