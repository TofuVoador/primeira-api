const { Pool } = require("pg");

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: "seu_usuario",
  host: "localhost",
  database: "sua_basedados",
  password: "sua_senha",
  port: 5432,
});

// Função para buscar todos os usuários
async function getAllUsers() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}

// Exportar funções para uso em outras partes do código
module.exports = {
  getAllUsers,
};
