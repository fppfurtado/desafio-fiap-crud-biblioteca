import server from "./server.js";

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`servidor http escutando na porta ${PORT}`);
});