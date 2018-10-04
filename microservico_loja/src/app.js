const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//Carrega dos Models
const Product = require('./models/product.model');
const Cliente = require('./models/cliente.model');
const Venda = require('./models/venda');

//Carrega as rotas
const indexRoutes = require('./routes/index');
const productRoute = require('./routes/product.routes');
const clienteRoute = require('./routes/cliente.routes');
const vendaRoute = require('./routes/venda.routes');


mongoose.connect('mongodb://lojaauser:user753@ds035747.mlab.com:35747/lojanode');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoutes);
app.use('/produtos', productRoute);
app.use('/clientes', clienteRoute);
app.use('/vendas', vendaRoute);
module.exports = app;