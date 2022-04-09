const express = require('express');
const router = express.Router();
const corporateRoutes = require('./corporateRouter');

router.use('/', corporateRoutes);

module.exports = router;
