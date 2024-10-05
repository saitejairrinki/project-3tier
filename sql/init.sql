CREATE DATABASE hello_world_db;
USE hello_world_db;
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255)
);
INSERT INTO messages (message) VALUES ('Hello World from MySQL Database!');