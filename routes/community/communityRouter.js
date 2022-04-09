const express = require('express');
const router = express.Router();
const communityCtrl = require('../../controllers/community.controller');

router.get('/', communityCtrl.getCommunitys);

module.exports = router;
