const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients');

router.get('/', clientsController.list);
router.post('/', clientsController.create);

module.exports = router;
