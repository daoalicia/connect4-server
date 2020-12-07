DROP TABLE IF EXISTS board;

CREATE TABLE board (
  cell_id SERIAL PRIMARY KEY,
  colNum INT,
  rowNum INT,
  isPlayer1 INT DEFAULT 0,
  isPlayer2 INT DEFAULT 0
);
