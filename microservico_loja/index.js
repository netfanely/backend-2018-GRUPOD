/*
 * Configura toda a parte do servidor com: 
 *  - express - Servidor http node (documentação em http://expressjs.com/ e ...
 *  ... https://github.com/expressjs/express)
 *  - bodyparser - Middleware do express que, nesse caso,  realiza o parser do body da requisição ...
 *  ... para objetos JSON (documentação em https://github.com/expressjs/body-parser)
 *  - cors - Middleware que permite a realização de requisição de outros domínios...
 *  ... (Não tenho certeza se essa é a documentação https://github.com/expressjs/cors)
 *  - express-query-int - Transforma os números de uma requisição em inteiros...
 *  ... (Documentação em https://github.com/mariusc23/express-query-int)
 */
const server = require('./config/server')

/*
 * Simplesmente se conecta com o banco(Mongo) utilizando o:
 *  - mongoose que escreve validação de dados, casting e lógica de negócios... 
 *  ... (documentação https://mongoosejs.com/docs/guide.html)
 */
require('./config/database')

/*
 * Configura a rota: /api/alunos
 * Cria uma regra de validação para aluno (ele tem que ter matricula e nome)
*/
require('./config/routes')(server)
