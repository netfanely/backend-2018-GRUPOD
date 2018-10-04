'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true,
    },
    valor: {
        type: Number,
        required: true
    },
});
module.exports = mongoose.model('Product', schema);