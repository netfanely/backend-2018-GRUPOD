'use strict';

const mongoose = require('mongoose');
const Cep = mongoose.model('Cep');

exports.get = (req, res, next) => {
    Cep
        .find({}, "cep rua numero bairro cidade estado")
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(data);
        });
};

exports.getbyCep = (req, res, next) => {
    Cep
        .findOne({
                cep: req.params.cep
            },
            "cep rua numero bairro cidade estado"
        ).then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(data);
        });
}

exports.post = (req, res, next) => {
    var cep = new Cep(req.body);
    cep.save()
        .then(x => {
            res.status(201).send({
                message: 'CEP cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha cadastrar cep',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    Cep.findByIdAndUpdate(req.params.id, {
            $set: {
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado
            }
        })
        .then(x => {
            res.status(200).send({
                message: 'CEP atualizado com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar cep'
            })
        })
};

exports.del = (req, res, next) => {
    Cep.remove({
            _id: req.params.id
        })
        .then(x => {
            res.status(200).send({
                message: 'CEP removido com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover CEP'
            })
        })
};