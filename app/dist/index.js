import server from "./server.js";

const PORT = 3000;

server.listen(PORT, (req, res) => {
    console.log("servidor escutando...");
})