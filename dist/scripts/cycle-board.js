/* eslint-disable import/extensions */
import neighborCounter from "./neighbor-detector.js";

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

export default traverse2dArray;
