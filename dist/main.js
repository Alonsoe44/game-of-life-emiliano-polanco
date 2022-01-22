/* import neighborCounter from "./neighbor-detector.js"; */

const neighborFile = require("./neighbor-detector");

const { neighborCounter } = neighborFile;

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

const arrTest = create2dArray(10, 15);

const cellStateSelector = (x, y, statusGood, board) => {
  let futureState = false;
  if (statusGood) {
    if (
      neighborCounter(x, y, board) === 2 ||
      neighborCounter(x, y, board) === 3
    ) {
      futureState = true;
    }
  } else if (neighborCounter(x, y, board) === 3) {
    futureState = true;
  }
  return futureState;
};

const traverse2dArray = (array2dTraversed) =>
  array2dTraversed.map((simpleArray, row) =>
    simpleArray.map((cellState, column) =>
      cellStateSelector(row, column, cellState, array2dTraversed)
    )
  );

console.table(traverse2dArray(arrTest));
module.exports.creade2dArray = create2dArray;
module.exports.traverse2dArray = traverse2dArray;

/* export { create2dArray, neighborDetectorFunctions }; */
