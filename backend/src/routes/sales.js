const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales');

router.get('/', salesController.list);
router.post('/', salesController.create);

module.exports = router;
