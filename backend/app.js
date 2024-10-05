const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const pool = mysql.createPool({
  host: 'mysql-service',
  user: 'root',
  password: 'password',
  database: 'hello_world_db'
});

app.get('/api/hello', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT message FROM messages LIMIT 1');
    res.json({ message: rows[0].message });
  } catch (err) {
    res.status(500).send('Error fetching message from database');
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});