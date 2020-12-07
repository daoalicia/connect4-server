DROP TABLE IF EXISTS board;

CREATE TABLE board (
  cell_id SERIAL PRIMARY KEY,
  colNum INT,
  rowNum INT,
  isPlayer1 BOOL,
  isPlayer2 BOOL
);
