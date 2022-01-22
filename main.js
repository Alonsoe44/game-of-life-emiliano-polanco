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

const lookRight = (x, y, board) => board[x][y + 1]; // just invoke if its no in the firt or las column
const lookLeft = (x, y, board) => board[x][y - 1];
const lookUp = (x, y, board) => board[x + 1][y]; // the same as the top one
const lookDown = (x, y, board) => board[x - 1][y];
const lookRightUp = (x, y, board) => board[x + 1][y + 1];
const lookRightDown = (x, y, board) => board[x + 1][y - 1];
const lookLeftUp = (x, y, board) => board[x - 1][y + 1];
const lookLeftDown = (x, y, board) => board[x - 1][y - 1];

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

const neighborDetectorFunctions = [
  lookRight,
  lookLeft,
  lookUp,
  lookDown,
  lookRightUp,
  lookRightDown,
  lookLeftUp,
  lookLeftDown,
];

module.exports.creade2dArray = create2dArray;
module.exports.neighborDetectorFunctions = neighborDetectorFunctions;
