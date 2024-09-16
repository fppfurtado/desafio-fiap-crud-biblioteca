import express from "express";
import router from "./router.js";

const PORT = 3000;
const server = express();

router(server);

export default server;