const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente.controller');

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delCliente);

module.exports = router;