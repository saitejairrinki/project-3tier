CREATE DATABASE hello_world_db;
USE hello_world_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255) // For demonstration purposes; use hashed passwords in production
);

INSERT INTO users (username, password) VALUES ('user1', 'password1'); // Sample user
INSERT INTO messages (message) VALUES ('Hello World from MySQL Database!');

