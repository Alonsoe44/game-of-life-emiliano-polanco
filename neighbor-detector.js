const buardo = [
  [true, false, true],
  [false, true, false],
  [true, false, true],
];
const simpleCaseNeighborCounter = (x, y, board) => {
  let totalNeighbors;
  for (const simpleFunction of neighborDetectorFunctions) {
    if (simpleFunction(x, y, board)) {
      totalNeighbors++;
    }
  }
  return totalNeighbors;
};
const caseClassifierNeighborCounter = (x, y, board) => {
  let problemCase = "normal";
  if (y === board[0].length - 1) {
    problemCase = "lastColumn";
  }
  if (y === 0) {
    problemCase = "firstColumn";
  }
  if (x === board.length - 1) {
    problemCase = "lastRow";
  }
  if (x === 0) {
    problemCase = "firstRow";
  }
  if (y === board[0].length - 1 && x === 0) {
    problemCase = "topRighCorner";
  }
  if (y === board[0].length - 1 && x === board.length - 1) {
    problemCase = "bottomRigthCorner";
  }
  if (y === 0 && x === 0) {
    problemCase = "topLeftCorner";
  }
  if (y === 0 && x === board.length - 1) {
    problemCase = "bottomLeftCorner";
  }
  return problemCase;
};
const neighborCounter = (x, y, board) => {
  caseClassifierNeighborCounter(x, y, board);
  return totalNeighbors;
};

const casesFunctionsApplier = {
  lastColumn: () => {},
  firstColumn: () => {},
  lastRow: () => {},
  firstRow: () => {},
  topRigthCorner: () => {},
  bottomRigthCorner: () => {},
  topLeftCorner: () => {},
  bottomLeftCorner: () => {},
  normal: simpleCaseNeighborCounter(),
};

console.log(neighborCounter(1, 1, buardo));
