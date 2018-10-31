'use strict';

const express = require('express');
const router = express.Router();


const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'Microservico Loja',
        version: '0.0.1',
        rotas: [{
            vendas: "/vendas [get,post,delete]",
            produtos: "/produtos [get, post, put, delete]",
            clientes: "/clientes [get, post, put, delete]",
        }]
    })
});

module.exports = router;