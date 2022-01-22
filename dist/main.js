const create2dArray = (rows, colums) => {
  const array2d = [];

  for (let i = 0; i < rows; i++) {
    array2d[i] = [];
    for (let j = 0; j < colums; j++) {
      array2d[i][j] = false;
    }
  }
  return array2d;
};

/* const neighborDetectorFunction = [
  (x, y, board) => board[x][y + 1],
  (x, y, board) => board[x][y - 1],
  (x, y, board) => board[x + 1][y],
  (x, y, board) => board[x - 1][y],
  (x, y, board) => board[x + 1][y + 1],
  (x, y, board) => board[x + 1][y - 1],
  (x, y, board) => board[x - 1][y + 1],
  (x, y, board) => board[x - 1][y - 1],
]; */

module.exports.creade2dArray = create2dArray;

/* export { create2dArray, neighborDetectorFunctions }; */
