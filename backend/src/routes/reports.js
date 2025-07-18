const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reports');

router.get('/financial', reportsController.financial);
router.get('/accounting', reportsController.accounting);

module.exports = router;
