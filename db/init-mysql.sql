CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50)
);

INSERT INTO users (name, email) VALUES 
('User1', 'user1@example.com'),
('User2', 'user2@example.com'),
('User3', 'user3@example.com'),
('User4', 'user4@example.com'),
('User5', 'user5@example.com');