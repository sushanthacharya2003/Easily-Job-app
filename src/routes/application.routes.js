const express = require('express');
const router = express.Router();
const appCtrl = require('../controllers/application.controller');

router.post('/apply', appCtrl.apply);
router.get('/', appCtrl.listApplications);

module.exports = router;

