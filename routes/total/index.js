const express = require('express');
const router = express.Router();
const totalRoutes = require('./totalRouter');

router.use('/', totalRoutes);

module.exports = router;
