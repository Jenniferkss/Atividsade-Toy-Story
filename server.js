import express from "express";
import dotenv from "dotenv";
import personagensRoutes from "./src/routes/personagensRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3002;


app.get("/", (req, res) => {
    res.json({ message: " 🧸 API do Toy Story funcionando!" });
});


app.use("/personagens", personagensRoutes);



app.listen(serverPort, () => {
    console.log(`Servidor rodando em http://localhost:${serverPort} `);
});
