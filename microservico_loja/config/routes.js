const express = require('express')

module.exports = function(server) {

  const router = express.Router()
  server.use('/api', router)

  const alunoService = require('../api/aluno/alunoService')
  alunoService.register(router, '/alunos');

  const venda = require('../api/loja/venda');
  venda.register(router, '/vendas');


}
