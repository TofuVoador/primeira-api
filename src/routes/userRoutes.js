const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Rota para buscar todos os usuários
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.postUser);

// Exportar o roteador para uso no arquivo de servidor
module.exports = router;
