const express = require('express');
const app = express();
const mysql = require('mysql2');
const api = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Linkin213()',
  database: 'work',
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);

app.listen(3001, () => {
  console.log('Server running...');
});
