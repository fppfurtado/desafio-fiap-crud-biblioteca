# DESAFIO MÓDULO TYPESCRIPT: API CRUD BIBLIOTECA
### FIAP POS TECH FULL STACK DEVELOPMENT
---

O projeto consiste em uma API CRUD de um Sistema de Gerenciamento de Biblioteca, implementada com Node.js (v18.16.0), Typescript e SQLite para a persistência dos dados.

A solução implementa as quatro operações básicas de CRUD para a entidade Livro, conforme exigido no Desafio proposto.

## OPERAÇÕES CRUD
As operações seguem a arquitetura REST (operações com verbos HTTP) com uso de objetos JSON para troca de dados.

```http
GET /livros
GET /livros/:id
POST /livros
PUT /livros/:id
DELETE /livros/:id
```

A modelagem de Livro utilizada pela API segue a especificação abaixo:

```javascript
type book = {
  id,
  title,
  author,
  isbn,
  year
}
```

## EXECUTANDO A APLICAÇÃO
Para rodar a aplicação, basta clonar o projeto e executar no terminal os comandos abaixo no diretório raiz do projeto, na ordem:

```javascript
npm install
```
```javascript
npm run start
```
