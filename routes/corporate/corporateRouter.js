const express = require('express');
const router = express.Router();
const corporateCtrl = require('../../controllers/corporate.controller');

router.get('/', corporateCtrl.getCorporates);
 
module.exports = router;
