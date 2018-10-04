'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    createDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    number: {
        type: String,
        required: true,
    },
    items: [{
        qtdade: {
            type: Number,
            required: true,
            default: 1
        },
        produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
});
module.exports = mongoose.model('Venda', schema);