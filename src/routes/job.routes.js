const express = require('express');
const router = express.Router();
const jobCtrl = require('../controllers/job.controller');

router.get('/', jobCtrl.listJobs);
router.get('/:id', jobCtrl.getJob);
router.post('/', jobCtrl.postJob);

module.exports = router;

