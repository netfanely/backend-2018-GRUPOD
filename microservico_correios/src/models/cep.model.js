'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cep: {
        type: String,
        required: true,
        unique: true,
    },
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Cep', schema);