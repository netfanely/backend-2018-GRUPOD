const restful = require('node-restful')
const mongoose = restful.mongoose

const ItemVenda = new mongoose.Schema({
    codItem:{type: String, required: true},
    descricao:{type: String, required: true},
    valorUnitario:{type: Number, required: true},
    quantidade:{type: Number, required: true},
    valorTotalItem:{type: Number, required: true}
})

const Cliente = new mongoose.Schema({
    nome:{type: String, required: true},
    cpf:{type: String, required: true},
    cep:{type: String, required: true}
});

const vendaSchema = new mongoose.Schema({
    data:{type: Date, required: true, default: Date.now}, 
    vendedor:{type: String, required: true},
    valorTotal:{type: Number, min: 0, required: true},
    cliente: {type: Cliente, required: true},
    itens: [ItemVenda]
})

var Venda = restful.model('Venda', vendaSchema);
Venda.methods(['get', 'post', 'put', 'delete'])
Venda.updateOptions({new: true, runValidators: true})

module.exports = Venda;
