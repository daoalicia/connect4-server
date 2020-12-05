const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// connect to database/credentials here
// let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
// let connection = mysql.createConnection(credentials);
// connection.connect();

const port = 5000;
app.listen(port, () => {
    console.log(`We're live on port ${port}!`);
});