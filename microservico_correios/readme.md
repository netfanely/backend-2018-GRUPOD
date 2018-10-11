# Microservico_Correios

Iniciar API

`npm install`

`npm start`

## Metódos HTTP Correios

### GET Ceps
http://localhost:8081/

### GET por CEP
http://localhost:8081/:cep
_Exemplo: http://localhost:8081/74825210_

### POST CEP
http://localhost:8081/

Formato:

```javascript
{
	"cep": "",
	"rua": "",
	"numero": "",
	"bairro": "",
	"cidade": "",
	"estado": ""
}
```

### PUT CEP
http://localhost:8081/:id

Formato:

```javascript
{
	"rua": "",
	"numero": "",
	"bairro": "",
	"cidade": "",
	"estado": ""
}
```

### Delete CEP
http://localhost:8081/:id
