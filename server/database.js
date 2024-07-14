// db.js
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize for SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite' // The SQLite database file
});

module.exports = sequelize;