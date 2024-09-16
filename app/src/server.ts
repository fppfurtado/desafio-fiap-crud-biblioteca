import express from "express";

export class Server {
    private PORT: number = 3000;
    private LISTEN_MESSAGE: string = `servidor escutando na porta ${this.PORT}`;
    private express = express();

    constructor() {
        this.setRoutes();
    }

    private setRoutes(): void {
        this.express.get("/", (req, res) => {
            res.status(200).send('Requisição recebida com sucesso');
        })
    }

    public listen(): void {
        this.express.listen(this.PORT, () => {
            console.log(this.LISTEN_MESSAGE);
        })
    }

}