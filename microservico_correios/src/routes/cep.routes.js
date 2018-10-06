'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/cep.controller');

router.get('/', controller.get);
router.get('/:cep', controller.getbyCep);
router.post('/', controller.post);
router.put('/:cep', controller.put);
router.delete('/:cep', controller.del);

module.exports = router;