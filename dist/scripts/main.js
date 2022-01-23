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
    pencil.drawBorderSquare(x, y, constantDeadColor);
  } else {
    pencil.drawBorderSquare(x, y, constantPrimaryColor);
  }
};

// creationWelcomeCanvas
const welcomeBoxSize = 5;
let welcomeColumns = size.width / welcomeBoxSize + 1;
let welcomeRows = size.height / welcomeBoxSize + 1;
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
myPencil.drawBoardGrid(gameArray);
// Event listeners

window.addEventListener("mousemove", (event) => {
  mouse.x = Number.parseInt(
    (event.clientX - size.width / 2) / constantBoxSize,
    10
  );
  mouse.y = Number.parseInt(
    (event.clientY -
      7 -
      (size.height / 2 - (constantRows * constantBoxSize) / 2)) /
      constantBoxSize,
    10
  );
});

window.addEventListener("click", () => {
  if (
    !(
      mouse.x < 0 ||
      mouse.x > constantColumns ||
      mouse.y < 0 ||
      mouse.y > constantRows
    )
  ) {
    selectReviveCell(mouse.x, mouse.y, gameArray, myPencil);
    if (gameArray[mouse.y][mouse.x] === true) {
      gameArray[mouse.y][mouse.x] = false;
    } else {
      gameArray[mouse.y][mouse.x] = true;
    }
  }

  welcomeArray = create2dArray(welcomeRows, welcomeColumns);
});

const initialTime = Date.now();
let iterationTime = 0;
let userInput = false;
const tick = () => {
  const timePassed = Date.now() - initialTime;
  if (timePassed > iterationTime) {
    iterationTime += 100;
    welcomeArray = traverse2dArray(welcomeArray);
    welcomePencil.drawBoard(welcomeArray);
    if (userInput) {
      gameArray = traverse2dArray(gameArray);
      myPencil.drawBoardGrid(gameArray);
    }
  }
  requestAnimationFrame(tick);
};

tick();
const startGame = () => {
  userInput = true;
};
const buttonDom = document.querySelector(".information-game__button");
window.addEventListener("resize", () => {
  size.height = window.innerHeight;
  size.width = window.innerWidth;
  welcomeColumns = size.width / welcomeBoxSize + 1;
  welcomeRows = size.height / welcomeBoxSize + 1;
  gameArray = create2dArray(welcomeRows, welcomeColumns);
  welcomePencil.boardArray = gameArray;
  welcomePencil.colums = welcomeColumns;
  welcomePencil.rows = welcomeRows;
  welcomeArray = traverse2dArray(welcomeArray);
  welcomePencil.drawBoard(welcomeArray);
  console.log("bork");
  console.log(welcomePencil);
});
buttonDom.onclick = startGame;
/* module.exports.creade2dArray = create2dArray;
module.exports.traverse2dArray = traverse2dArray; */
