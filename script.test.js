const rowsNumber = 20;
const colsNumber = 20;
const boxSize = 10;

const domCanvas = document.querySelector(".game-view-port");
const context = domCanvas.getContext("2d");

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

describe("Given a create2dArray function", () => {
  describe("When it receives a 3 as first parameter and second one", () => {
    test("Then it should return a 2d array with false", () => {
      // Arrange
      const numberOfRows = 3;
      const numbersOfColumns = 3;
      const expected2dArray = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      // Act
      const array2dCreated = create2dArray(numberOfRows, numbersOfColumns);

      // Assert
      expect(array2dCreated).toEqual(expected2dArray);
    });
  });
});
