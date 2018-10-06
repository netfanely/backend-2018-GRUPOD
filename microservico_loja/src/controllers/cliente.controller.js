'use strict';

const mongoose = require('mongoose');
const Cliente = mongoose.model('Cliente');
const request = require('request');
var rp = require('request-promise');


function getAdrres() {
    var options = {
        hostname: 'localhost',
        port: 8081,
        path: '/74825010',
        methods: 'GET'
    };

    http.request(options, function(res) {
        var body = '';
        res.on('data', function(chunck) {
            body += chunck;
        })
        res.on('end', function() {
            myVar = JSON.parse(body).rua.renderToString;
        })

    }).end();
}

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
    cliente.email = req.body.email;
    var options = {
        uri: 'http://localhost:8081/' + cliente.cep,
        json: true,
    };
    rp(options)
        .then(function(repos) {
            cliente.endereco = repos.rua + ", bairro " + repos.bairro + ", número " + repos.numero +
                " ." + repos.cidade + "-" + repos.estado;
            cliente.save(function(err) {
                if (err)
                    res.send(err);
                res.json({
                    message: 'Cliente cadastrado com sucesso!'
                });
            });
        })
        .catch(function(err) {
            console.log(err)
        });
}

exports.put = (req, res, next) => {

    Cliente.findById(req.params.id, function(err, cliente) {
        cliente.nome = req.body.nome;
        cliente.cep = req.body.cep;
        cliente.email = req.body.email;
        var options = {
            uri: 'http://localhost:8081/' + cliente.cep,
            json: true,
        };
        rp(options)
            .then(function(repos) {
                cliente.endereco = repos.rua + ", bairro " + repos.bairro + ", número " + repos.numero +
                    " ." + repos.cidade + "-" + repos.estado;
                cliente.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({
                        message: 'Cliente atualizado com sucesso!'
                    });
                });
            })
            .catch(function(err) {
                console.log(err)
            });
    });

};

exports.delCliente = (req, res, next) => {
    Cliente.remove({
            _id: req.params.id
        })
        .then(x => {
            res.status(200).send({
                message: 'Cliente removido com sucesso'
            })
        })
        .catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o cliente'
            })
        })
};