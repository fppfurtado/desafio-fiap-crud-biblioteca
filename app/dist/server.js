import express from "express";

const server = express();

server.get("/", (req, res) => {
    res.status(200).send("requisição recebida!");
})

export default server;