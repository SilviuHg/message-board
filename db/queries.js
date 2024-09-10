const pool = require("./pool");

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  } catch (err) {
    console.error("Error retrieving messages", err);
    throw err;
  }
}

async function getMessageById(id) {
  try {
    const { rows } = await pool.query(`SELECT * FROM messages WHERE id = $1`, [
      id,
    ]);
    return rows;
  } catch (err) {
    console.error("Error retrieving message by ID", err);
    throw err;
  }
}

async function insertMessage(username, text, date) {
  await pool.query(
    "INSERT INTO messages (username, text, date) VALUES ($1, $2, $3)",
    [username, text, date]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
