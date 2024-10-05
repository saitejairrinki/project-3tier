const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Enable JSON parsing for incoming requests

const pool = mysql.createPool({
  host: 'mysql-service',
  user: 'root',
  password: 'password',
  database: 'hello_world_db'
});

// Sample users table, you might need to create this
// CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(255) UNIQUE,
//   password VARCHAR(255) // In a real app, this should be hashed
// );

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    if (rows.length > 0) {
      res.json({ message: 'Login successful!' });
    } else {
      res.json({ message: 'Invalid username or password.' });
    }
  } catch (err) {
    res.status(500).send('Error logging in');
  }
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

