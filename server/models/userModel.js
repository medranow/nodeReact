const db = require('../database');

/*
// Create table if it doesn't exist
const createTable = () => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)', (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
    } else {
      console.log('Table created or already exists.');
    }
  });
};

// Insert a user into the table
const insertUser = (name, email, callback) => {
  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function (err) {
    callback(err, this.lastID);
  });
};

// Fetch all users
const getAllUsers = (callback) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    callback(err, rows);
  });
};

module.exports = {
  createTable,
  insertUser,
  getAllUsers,
};
*/