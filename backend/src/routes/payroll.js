const express = require('express');
const router = express.Router();
const payrollController = require('../controllers/payroll');

router.get('/paychecks', payrollController.paychecks);
router.post('/paychecks', payrollController.create);

module.exports = router;
