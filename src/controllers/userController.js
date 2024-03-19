const userModel = require("../models/User");

// Controlador para buscar todos os usuários
async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários do banco de dados" });
  }
}

async function postUser(req, res) {
  const {} = req.body;
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários do banco de dados" });
  }
}

// Exportar controladores para uso em rotas
module.exports = {
  getAllUsers,
};
