const express = require('express');
const router = express.Router();
const communityRoutes = require('./communityRouter');

router.use('/', communityRoutes);

module.exports = router;
