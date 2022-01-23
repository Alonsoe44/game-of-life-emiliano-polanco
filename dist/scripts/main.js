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

// creationWelcomeCanvas
const welcomeBoxSize = 5;
const welcomeColumns = size.width / welcomeBoxSize + 1;
const welcomeRows = size.height / welcomeBoxSize + 1;
const welcomeAliveColor = "#3C787E";
const welcomeDeadColor = "#D0CD94";
let welcomeArray = create2dArray(welcomeRows, welcomeColumns);
const welcomeCanvas = document.querySelector(".canvas--screen");
const welcomePencil = new BoardPencil(
  welcomeCanvas,
  welcomeArray,
  welcomeColumns,
  welcomeRows,
  welcomeBoxSize,
  welcomeAliveColor,
  welcomeDeadColor
);

welcomePencil.drawBoard(welcomeArray);

// Execution

let gameArray = create2dArray(constantRows, constantColumns);
const mainCanvas = document.querySelector(".canvas--user");
const myPencil = new BoardPencil(
  mainCanvas,
  gameArray,
  constantColumns,
  constantRows,
  constantBoxSize,
  constantPrimaryColor,
  constantDeadColor
);
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

  welcomeArray = create2dArray(welcomeRows, welcomeColumns);
  if (gameArray[mouse.y][mouse.x] === true) {
    gameArray[mouse.y][mouse.x] = false;
  } else {
    gameArray[mouse.y][mouse.x] = true;
  }
});

const initialTime = Date.now();
let iterationTime = 0;

const tick = () => {
  const timePassed = Date.now() - initialTime;
  if (timePassed > iterationTime) {
    iterationTime += 100;
    welcomeArray = traverse2dArray(welcomeArray);
    gameArray = traverse2dArray(gameArray);
    myPencil.drawBoard(gameArray);
    welcomePencil.drawBoard(welcomeArray);
    console.log("magic");
  }
  requestAnimationFrame(tick);
};

// tick();

/* module.exports.creade2dArray = create2dArray;
module.exports.traverse2dArray = traverse2dArray; */
