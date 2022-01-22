const mainFunctions = require("../main");

const create2dArray = mainFunctions.creade2dArray;

const [lookRight, , , lookDown] = mainFunctions.neighborDetectorFunctions;

describe("Given a create2dArray function", () => {
  describe("When it receives a 3 as first parameter and second one", () => {
    test("Then it should return a 2d array with false", () => {
      const numberOfRows = 3;
      const numbersOfColumns = 4;
      const expected2dArray = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ];

      const array2dCreated = create2dArray(numberOfRows, numbersOfColumns);

      expect(array2dCreated).toEqual(expected2dArray);
    });
  });
});
describe("Given a lookRigth function", () => {
  describe("When it receives a 2 as first parameter, a 1 as second one and a 3x3 array with a true on [2][2]", () => {
    test("Then it should return true", () => {
      const x = 2;
      const y = 1;
      const inputArray = [
        [false, false, false],
        [false, false, false],
        [false, false, true],
      ];
      const expectedOutput = true;

      const functionReply = lookRight(x, y, inputArray);

      expect(functionReply).toBe(expectedOutput);
    });
  });
  describe("When it receives a 1 as first parameter, a 0 as second one and a 3x3 array with no true values", () => {
    test("Then it should return false", () => {
      const x = 1;
      const y = 0;
      const inputArray = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];
      const expectedOutput = false;

      const functionReply = lookRight(x, y, inputArray);

      expect(functionReply).toBe(expectedOutput);
    });
  });
});

describe("Given a lookDown function", () => {
  describe("When it receives a 1 as first parameter, a 0 as second one and a 3x3 array with a true on [1][1]", () => {
    test("Then it should return true", () => {
      const x = 1;
      const y = 0;
      const inputArray = [
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ];
      const expectedOutput = true;

      const functionReply = lookDown(x, y, inputArray);

      expect(functionReply).toBe(expectedOutput);
    });
  });
  describe("When it receives a 0 as first parameter, a 2 as second one and a 3x3 array with no true values", () => {
    test("Then it should return false", () => {
      const x = 1;
      const y = 1;
      const inputArray = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];
      const expectedOutput = false;

      const functionReply = lookDown(x, y, inputArray);

      console.table();
      expect(functionReply).toBe(expectedOutput);
    });
  });
});
