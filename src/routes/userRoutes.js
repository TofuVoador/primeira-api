const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Rota para buscar todos os usuários
router.get("/users", userController.getAllUsers);

// Exportar o roteador para uso no arquivo de servidor
module.exports = router;
