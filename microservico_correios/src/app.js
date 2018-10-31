const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Carrega dos Models
const Cep = require('./models/cep.model');
//Carrega as rotas
const indexRoutes = require('./routes/cep.routes');
mongoose.connect('mongodb://cepuser:cep753@ds035747.mlab.com:35747/cepapi');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoutes);
module.exports = app;