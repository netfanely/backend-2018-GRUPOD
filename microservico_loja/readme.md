# Microservico_loja

Iniciar API

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
http://localhost:3000/vendas/:id
