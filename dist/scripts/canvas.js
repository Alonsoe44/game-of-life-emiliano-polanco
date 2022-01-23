class BoardPencil {
  myCanvas;
  context;
  arrayBoard;
  numberOfColumns;
  numberOfRows;
  boxsize;
  primaryColor;
  deadColor;
  constructor(
    canvas,
    gameArray,
    columns,
    rows,
    boxsize,
    aliveColor,
    deadColor
  ) {
    this.myCanvas = canvas;
    this.arrayBoard = gameArray;
    this.context = this.myCanvas.getContext("2d");
    this.numberOfColumns = columns;
    this.numberOfRows = rows;
    this.boxsize = boxsize;
    this.primaryColor = aliveColor;
    this.deadColor = deadColor;
    this.myCanvas.width = this.numberOfColumns * this.boxsize;
    this.myCanvas.height = this.numberOfRows * this.boxsize;
  }

  drawBoard(inputBoard) {
    // that axes wer inverted CAUTION
    for (let i = 0; i < this.numberOfRows; i++) {
      for (let j = 0; j < this.numberOfColumns; j++) {
        if (inputBoard[i][j]) {
          this.drawSquare(j, i, this.primaryColor);
        } else {
          this.drawSquare(j, i, this.deadColor);
        }
      }
    }
  }

  drawSquare(x, y, color) {
    this.context.fillStyle = color;
    this.context.fillRect(
      x * this.boxsize,
      y * this.boxsize,
      this.boxsize,
      this.boxsize
    );
    this.context.strokeStyle = "rgb(156, 156, 156)";
    this.context.strokeRect(
      x * this.boxsize,
      y * this.boxsize,
      this.boxsize,
      this.boxsize
    );
  }
}

export default BoardPencil;
