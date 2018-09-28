const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Executando em http://%s:%s", host, port);
})

app.get('/', function(req, res) {
    console.log('Requisição GET do index.js')
    res.send('Hello GET');
})

app.get('/:cep', function(req, res) {
	var cep    = "";
    var rua    = "";
    var numero = "";
    var bairro = "";
    var cidade = "";

    var fs = require('fs');
    var data = JSON.parse(fs.readFileSync('cep.json', 'utf8'));

    for (var i = 0; i < data.ceps.length; i++) {
    	if (data.ceps[i].cep == req.params.cep) {
    		cep    = data.ceps[i].cep;
    		rua    = data.ceps[i].rua;
    		numero = data.ceps[i].numero;
    		bairro = data.ceps[i].bairro;
    		cidade = data.ceps[i].cidade;
    	}
    }

    endereco = "Cep: " + cep + ", " + "Rua: " + rua + ", " + "Número: " + numero + ", " + "Bairro: " + bairro + ", " + "Cidade: " + cidade;

    res.send(endereco);
})