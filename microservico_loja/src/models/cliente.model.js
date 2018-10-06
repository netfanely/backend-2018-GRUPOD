'use strict';

const mongoose = require('mongoose');
const SchemaCliente = mongoose.Schema;

const cliente = new SchemaCliente({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model('Cliente', cliente);