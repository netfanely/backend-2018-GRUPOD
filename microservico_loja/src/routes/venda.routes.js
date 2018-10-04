const express = require('express');
const router = express.Router();
const controller = require('../controllers/venda.controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.delete('/:id', controller.del);

module.exports = router;