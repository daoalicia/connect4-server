const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const { request } = require('http');

const app = express();
app.use(cors());
app.use(express.json());

// connect to database/credentials here
let credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
let connection = mysql.createConnection(credentials);
connection.connect();

function rowToObject(row) {
    return {
        id: row.cell_id,
        colNum: row.colNum,
        rowNum: row.rowNum,
        isPlayer1: row.isPlayer1,
        isPlayer2: row.isPlayer2,
    };
}

// reading the info about the board
app.get('/play-connect4', (request, response) => {
  const query = 'SELECT * FROM board';
  connection.query(query, (error, rows) => {
    response.send({
        ok: true,
        memories: rows.map(rowToObject),
    });
  });
});

const port = 5000;
app.listen(port, () => {
    console.log(`We're live on port ${port}!`);
});