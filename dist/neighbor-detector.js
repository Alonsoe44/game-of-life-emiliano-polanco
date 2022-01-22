const lookRight = (x, y, board) =>
  typeof board[x] === "undefined" ? false : board[x][y + 1];
const lookLeft = (x, y, board) =>
  typeof board[x] === "undefined" ? false : board[x][y - 1];
const lookUp = (x, y, board) =>
  typeof board[x + 1] === "undefined" ? false : board[x + 1][y];
const lookDown = (x, y, board) =>
  typeof board[x - 1] === "undefined" ? false : board[x - 1][y];
const lookRightUp = (x, y, board) =>
  typeof board[x + 1] === "undefined" ? false : board[x + 1][y + 1];
const lookRightDown = (x, y, board) =>
  typeof board[x + 1] === "undefined" ? false : board[x + 1][y - 1];
const lookLeftUp = (x, y, board) =>
  typeof board[x - 1] === "undefined" ? false : board[x - 1][y + 1];
const lookLeftDown = (x, y, board) =>
  typeof board[x - 1] === "undefined" ? false : board[x - 1][y - 1];

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

const neighborCounter = (x, y, board) => {
  let totalNeighbors = 0;
  for (const simpleFunction of neighborDetectorFunctions) {
    if (simpleFunction(x, y, board)) {
      totalNeighbors++;
    }
  }
  return totalNeighbors;
};

module.exports.neighborDetectorFunctions = neighborDetectorFunctions;
module.exports.neighborCounter = neighborCounter;

/* export default neighborCounter;
 */
