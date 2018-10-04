'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({}, 'titulo descricao codigo valor')
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(data);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha cadastrar produto',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {
            $set: {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                valor: req.body.valor,
            }
        })
        .then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar produto'
            })
        })
};

exports.del = (req, res, next) => {
    Product.findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover produto'
            })
        })
};