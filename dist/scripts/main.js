/* eslint-disable import/extensions */
import BoardPencil from "./canvas.js";
import traverse2dArray from "./cycle-board.js";
import {
  constantColumns,
  constantRows,
  constantBoxSize,
  constantPrimaryColor,
  constantDeadColor,
} from "./constants.js";

/* const neighborFile = require("./neighbor-detector"); */
/* const neighborCounter = neighborFile; */

const create2dArray = (rows, colums) => {
  const array2d = [];
  for (let i = 0; i < rows; i++) {
    array2d[i] = [];
    for (let j = 0; j < colums; j++) {
      array2d[i][j] = Math.random() >= 0.5;
    }
  }
  return array2d;
};

const mouse = {
  x: 0,
  y: 0,
};

const size = {
  height: window.innerHeight,
  width: window.innerWidth,
};

const selectReviveCell = (x, y, table, pencil) => {
  if (table[y][x] === true) {
    pencil.drawSquare(x, y, constantDeadColor);
  } else {
    pencil.drawSquare(x, y, constantPrimaryColor);
  }
};

// Execution

let gameArray = create2dArray(constantRows, constantColumns);
console.table(gameArray);

const mainCanvas = document.querySelector(".game-view-port");
const myPencil = new BoardPencil(mainCanvas, gameArray);
myPencil.drawBoard(gameArray);
// Event listeners

window.addEventListener("mousemove", (event) => {
  mouse.x = Number.parseInt(
    (event.clientX -
      (size.width / 2 - (constantColumns * constantBoxSize) / 2)) /
      constantBoxSize,
    10
  );
  mouse.y = Number.parseInt(
    (event.clientY - (size.height / 2 - (constantRows * constantBoxSize) / 2)) /
      constantBoxSize,
    10
  );
});

window.addEventListener("click", () => {
  selectReviveCell(mouse.x, mouse.y, gameArray, myPencil);
  if (gameArray[mouse.y][mouse.x] === true) {
    gameArray[mouse.y][mouse.x] = false;
  } else {
    gameArray[mouse.y][mouse.x] = true;
  }
});

// tick function
const initialTime = Date.now();
let iterationTime = 1000;
const tick = () => {
  const timePassed = Date.now() - initialTime;
  if (timePassed > iterationTime) {
    iterationTime += 1000;
    gameArray = traverse2dArray(gameArray);
    myPencil.drawBoard(gameArray);
    console.log("magic");
  }

  requestAnimationFrame(tick);
};

tick();

/* module.exports.creade2dArray = create2dArray;
module.exports.traverse2dArray = traverse2dArray; */
