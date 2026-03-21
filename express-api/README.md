# 🚀 API REST com Express.js

Uma API simples de usuários construída com Node.js e Express, contendo operações básicas de CRUD (Create, Read, Update, Delete).

---

## 📦 Tecnologias utilizadas

- Node.js
- Express.js

---

## 📁 Estrutura do projeto

```
.
├── express-api/
│   ├── express-api.js
│   └── README.md
├── node_modules/
├── package.json
```

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes)

Verifique com:

```bash
node -v
npm -v
```

---

## ▶️ Como rodar o projeto

### 1. Acesse a pasta do projeto

```bash
cd express-api
```

---

### 2. Instale as dependências (caso ainda não tenha feito)

```bash
npm install express
```

---

### 3. Execute o servidor

```bash
node express-api.js
```

Você verá no terminal:

```
Server is running on port 3000
```

---

## 🌐 Acessando a API

Abra no navegador ou Postman:

```
http://localhost:3000
```

---

## 📌 Rotas disponíveis

### 🔹 GET /

Retorna status da API

---

### 🔹 GET /users

Lista todos os usuários

---

### 🔹 POST /users

Cria um novo usuário

📥 Body (JSON):

```json
{
  "name": "Lucas",
  "email": "lucas@email.com"
}
```

---

### 🔹 PUT /users/:id

Atualiza um usuário existente

📥 Body (JSON):

```json
{
  "name": "Lucas Atualizado",
  "email": "lucasnovo@email.com"
}
```

---

### 🔹 DELETE /users/:id

Remove um usuário

---

## 📊 Status Codes

| Código | Significado        |
| ------ | ------------------ |
| 200    | OK                 |
| 201    | Criado com sucesso |
| 400    | Erro na requisição |
| 404    | Não encontrado     |

---

## 🧪 Testando a API

Você pode usar ferramentas como:

- Postman
- Insomnia

---

## 📌 Melhorias futuras

- Adicionar banco de dados (MongoDB)
- Criar IDs únicos
- Validação de dados
- Separação em camadas (MVC)
- Autenticação (JWT)

---
