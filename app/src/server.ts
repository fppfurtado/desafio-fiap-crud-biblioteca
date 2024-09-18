import express from "express";
import * as dao from "./database.js";

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('DESAFIO FIAP - API CRUD Biblioteca');
});

server.get('/livros', async (req, res) => {
    const livros = await dao.listBooks();
    res.status(200).json(livros);
});

server.get('/livros/:id', async (req, res) => {
    const livros = await dao.findBookById(req.params.id);
    res.status(200).json(livros);
});

server.post('/livros', (req, res) => {
    const novoLivro = req.body;
    dao.createBook(novoLivro);
    res.status(201).send(`livro ${novoLivro.title} criado com sucesso`);
});

export default server;