# Lab API Node Express Mongo

Experimento de criação de API com NodeJS, Express e MongoDB.

## Executando a API

### Iniciando o Mongo

`mongod`

### Instalando dependências

`npm install`

### Executando em modo *dev*

`npm run dev`

### Executando um serviço

Abra o endereço `http://localhost:8080/api/alunos` num navegador.

## Criando uma API

### Requisitos

* Node instalado.
* Mongo instalado e executando.

### Crie uma nova pasta e vá para ela

`mkdir myapi && cd myapi`

## Inicie um projeto Node

`npm init`

Com `enter`, aceite todas as opções padrão. Note que o arquivo `package.json` foi criado.

### Instale as dependências

`npm install express body-parser mongoose node-restful mongoose-paginate lodash express-query-int pm2 --save`

Essa operação baixa e instala, na pasta `node_modules` todas as dependências. Isso pode demorar alguns minutos. A pasta `node_modules` não deve ir para o controle de versão.

O parâmetro `--save` do comando `npm install` inclui as dependências no arquivo `package.json`.

### Instale as dependências de desenvolvimento

`npm i nodemon --save-dev`

Essa dependência será usada apenas durante o desenvolvimento.

### Defina os scripts de execução

Inclua os scripts `dev` e `production` da seguinte forma. 

```
...
"scripts": {
  "dev": "nodemon",
  "production": "pm2 start index.js --name myapi
},
...
```

Nesse ponto a API está pronta para ser implementada.