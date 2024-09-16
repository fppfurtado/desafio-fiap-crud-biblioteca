import server from "./server.js";

const router = (server: any) => {
    server.route("/").get((req: any, res: any) => res.status(200).send('API Biblioteca'));
}

export default router;