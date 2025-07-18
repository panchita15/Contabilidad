const express = require('express');
const router = express.Router();
const quotesController = require('../controllers/quotes');

router.get('/', quotesController.list);
router.post('/', quotesController.create);

module.exports = router;
