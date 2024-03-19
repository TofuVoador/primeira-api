const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Controlador para buscar todos os usuários
async function getAllUsers(req, res) {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar usuários do banco de dados" });
  } finally {
    client.release();
  }
}

async function getUserById(req, res) {
  const { id } = req.params;
  const client = await pool.connect();
  try {
    const result = await client.query(`SELECT * FROM users WHERE id = ${id}`);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuário no banco de dados" });
  } finally {
    client.release();
  }
}

async function postUser(req, res) {
  const { name, email } = req.body;
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO Users (name, email) VALUES (${name}, ${email})`
    );
    res.json(result.rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao inserir usuário do banco de dados" });
  } finally {
    client.release();
  }
}

// Exportar controladores para uso em rotas
module.exports = {
  getAllUsers,
  getUserById,
  postUser,
};
