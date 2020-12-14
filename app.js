const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
// const { request } = require('https');

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
        currentPlayer: row.currentPlayer,
    };
}

// reading the info about the board
app.get('/play-connect4', (request, response) => {
  const query = 'SELECT * FROM board';
  connection.query(query, (error, rows) => {
    response.send({
        ok: true,
        board: rows.map(rowToObject),
    });
  });
});


// update cell info
//app.patch('/play-connect4/:id', (request, response) => {
//  const query = 'UPDATE board SET isPlayer1 = ? WHERE id = ?';
//  const params = [request.body.isPlayer1, request.params.id];
//  connection.query(query, (error, rows) => {
//    response.send({
//        ok: true,
//    });
//  });
//});


const port = 5000;
app.listen(port, () => {
    console.log(`We're live on port ${port}!`);
});
