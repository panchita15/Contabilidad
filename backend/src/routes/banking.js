const express = require('express');
const router = express.Router();
const bankingController = require('../controllers/banking');

router.post('/reconcile', bankingController.reconcile);

module.exports = router;
