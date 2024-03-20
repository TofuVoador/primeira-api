const express = require("express");
require("dotenv").config();
const userRoutes = require("./src/routes/userRoutes");
const homeRoutes = require("./src/routes/homeRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/", homeRoutes);

// Rota para usuários
app.use("/api", userRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
