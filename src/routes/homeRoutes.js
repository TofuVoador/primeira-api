const express = require("express");
const homeController = require("../controllers/homeController");
const router = express.Router();

// Rota para buscar todos os usuários
router.get("", homeController.getHomePage);

// Exportar o roteador para uso no arquivo de servidor
module.exports = router;
