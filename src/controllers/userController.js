const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Controlador para buscar todos os usuários
async function getAllUsers(req, res) {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários do banco de dados" });
  } finally {
    client.release();
  }
}

// Exportar controladores para uso em rotas
module.exports = {
  getAllUsers,
};
