'use strict';

const mongoose = require('mongoose');
const Venda = mongoose.model('Venda');
const guid = require('guid');

exports.get = (req, res, next) => {
    Venda
        .find({}, "number cliente createDate items")
        .populate("cliente")
        .populate("items.produto", "titulo descricao valor")
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(data);
        });
};

exports.post = (req, res, next) => {
    let data = new Venda();
    data.number = guid.raw().substring(0, 6);
    data.cliente = req.body.cliente;
    data.items = req.body.items
    data.save()
        .then(x => {
            res.status(201).send({
                message: 'Pedido cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha cadastrar pedido',
                data: e
            });
        });
}

exports.del = (req, res, next) => {
    Venda.remove({
            _id: req.params.id
        })
        .then(x => {
            res.status(200).send({
                message: 'Venda removido com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Venda ao remover produto'
            })
        })
};