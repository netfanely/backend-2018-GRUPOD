# backend-2018-GRUPOD

- Fanny Pastor Humpiri
- Danillo Guimarães de Oliveira
- Rhada costa
- Bruno Pinheiro

# Instruções

1. Acessar e iniciar o microservico_correios

`cd microservico_correios`

`npm install`

`npm start`

2. Acessar e iniciar o microservico_loja

`cd microservico_loja`

`npm install`

`npm start`

## Métodos HTTP Loja

### GET Produtos
http://localhost:3000/produtos

#### POST Produtos
http://localhost:3000/produtos

Formato:

```javascript
{
	"titulo": "",
	"descricao": "",
	"codigo": "",
	"valor": "",
}
```

### PUT Produtos
http://localhost:3000/produtos/:id

Formato:

```javascript
{
	"titulo": "",
	"descricao": "",
	"valor": "",
}
```

### DELETE Produtos
http://localhost:3000/produtos/:id

---

### GET Clientes
http://localhost:3000/clientes

#### POST Clientes
http://localhost:3000/clientes

Formato:

```javascript
{
	"nome": "",
	"cpf": "",
	"cep": "",
	"email": "",
}
```

### PUT Clientes
http://localhost:3000/clientes/:id

Formato:

```javascript
{
	"nome": "",
	"cep": "",
	"email": "",
}
```

### DELETE Clientes
http://localhost:3000/clientes/:id

---

### GET Vendas
http://localhost:3000/vendas

#### POST Vendas
http://localhost:3000/vendas

Formato:

```javascript
{
	"cliente": "<id do cliente>",
	"items":[{
		"qtdade": "",
		"produto": "<idd do produto",
	}]

}
```

### DELETE Vendas
http://localhost:3000/vendas

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
