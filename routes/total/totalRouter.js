const express = require('express');
const router = express.Router();
const TotalCtrl = require('../../controllers/total.controller');

router.get('/', TotalCtrl.getTotal);

module.exports = router;
