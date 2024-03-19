// Controlador para buscar todos os usuários
async function getHomePage(req, res) {
  res.json({ message: "API Funcionando" });
}

// Exportar controladores para uso em rotas
module.exports = {
  getHomePage,
};
