'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');
const request = require('request');



exports.get = (req, res, next) => {
    Cliente
        .find({})
        .then(data => {
            res.status(200).send(data);
        })
        .catch(e => {
            res.status(400).send(data);
        });
};

exports.post = (req, res, next) => {
    var cliente = new Cliente();
    cliente.nome = req.body.nome;
    cliente.cpf = req.body.cpf;
    cliente.cep = req.body.cep;
    request('http://localhost:8081/' + cliente.cep, {
        json: true
    }, (err, res, body) => {
        cliente.endereco = res.rua + res.numero + res.bairro + res.cidade;
    });
    cliente.email = req.body.email;
    cliente.save()
        .then(x => {
            res.status(201).send({
                message: 'Cliente cadastrado com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha cadastrar cliente',
                data: e
            });
        });
}

exports.put = (req, res, next) => {
    Cliente.findByIdAndUpdate(req.params.id, {
            $set: {
                nome: req.body.nome,
                cep: req.body.cep,
                email: req.body.email
            }
        })
        .then(x => {
            res.status(200).send({
                message: 'Cliente atualizado com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao atualizar o cliente'
            })
        })
};

exports.del = (req, res, next) => {
    Cliente.findOneAndRemove(req.params.id)
        .then(x => {
            res.status(200).send({
                message: 'Cliente removido com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover cliente'
            })
        })
};