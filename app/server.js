import express from "express";

const server = express();
const PORT = 3000;

server.listen(PORT, () => {
    console.log("servidor web escutando...");
})

server.get("/", (req, res) => {
    res.status(200).send("requisição recebida");
})