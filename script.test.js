const rowsNumber = 20;
const colsNumber = 20;
const boxSize = 10;

const domCanvas = document.querySelector(".game-view-port");
const context = domCanvas.getContext("2d");
domCanvas.width = colsNumber * boxSize;
domCanvas.height = rowsNumber * boxSize;

context.beginPath();
context.lineWidth = 0.05;

context.arc(100, 50, 50, 0, Math.PI * 2);
context.closePath();
context.stroke();

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

console.table(create2dArray(rowsNumber, colsNumber));

describe("Given a getApplesFirstPosition function", () => {
  describe("When it receives an array with melons and apples", () => {
    test("Then it should return position 1", () => {
      // Arrange
      const fruits = ["melons", "apples"];
      const expectedPosition = 1;

      // Act
      const applesPosition = getApplesFirstPosition(fruits);

      // Assert
      expect(applesPosition).toBe(expectedPosition);
    });
  });
});
