const express = require('express');
const router = express.Router();
const purchasesController = require('../controllers/purchases');

router.get('/', purchasesController.list);
router.post('/', purchasesController.create);

module.exports = router;
