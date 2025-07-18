const express = require('express');
const router = express.Router();
const dteController = require('../controllers/dte');

router.post('/send', dteController.send);

module.exports = router;
