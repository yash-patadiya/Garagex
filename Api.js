const express = require('express');
const mysql = require('mysql');


// Enable CORS for all origins in your Node.js/Express server


const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456789',
  database: 'Ty'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define API endpoints to handle saving data to MySQL

app.post('/USER', (req, res) => {
  const { name } = req.body;

  const insertQuery = 'INSERT INTO ap (name) VALUES (?)';
  connection.query(insertQuery, [name], (err, results) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
      return;
    }
    res.status(200).send('Data saved successfully');
  });
});

// Other necessary API endpoints

app.listen(3000, () => {
  console.log('Express server running on port 3000');
});
