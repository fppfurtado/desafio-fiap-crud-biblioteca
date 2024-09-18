import express from "express";
import * as dao from "./database.js";

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send('DESAFIO FIAP - API CRUD Biblioteca');
});

server.get('/livros', async (req, res) => {
    const books = await dao.listBooks();
    res.status(200).json(books);
});

server.get('/livros/:id', async (req, res) => {
    const books = await dao.findBookById(req.params.id);
    res.status(200).json(books);
});

server.post('/livros', (req, res) => {
    const bookFromRequest = req.body;
    dao.createBook(bookFromRequest)
    .then((stmt) => res.status(201).send(`livro ${bookFromRequest.title} criado com sucesso`))
    .catch((error) => res.status(500).send(`erro ao criar o livro ${bookFromRequest.title}`));
    
});

server.put('/livros/:id', (req, res) => {
    const bookFromRequest = req.body;
    dao.updateBook(bookFromRequest)
    .then((stmt) => res.status(200).send(`book id ${bookFromRequest.id} atualizado com sucesso`))
    .catch((error) => res.status(500).send(`erro ao atualizar o livro ${bookFromRequest.title}`));
    
});

server.delete('/livros/:id', (req, res) => {
    const { id } = req.params; 
    dao.deleteBook(id)
    .then((stmt) => res.status(200).send(`o livro id ${id} foi deletado com sucesso`))
    .catch((error) => res.status(500).send(`error ao deletar o livro id ${id}`));
});

export default server;