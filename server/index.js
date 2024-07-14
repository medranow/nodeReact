// server/index.js

const express = require("express");
const userModel = require('./models/userModel');
const sequelize = require('./database');

// Create table on server start
//userModel.createTable();

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

sequelize.authenticate()
  .then(() => {
      console.log('Connection to SQLite has been established successfully.');
  })
  .catch(err => {
      console.error('Unable to connect to the database:', err);
  });



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});