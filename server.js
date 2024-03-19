const express = require("express");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para análise de corpo JSON
app.use(express.json());

// Rota para usuários
app.use("/api", userRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});