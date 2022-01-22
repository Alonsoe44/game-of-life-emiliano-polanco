const neighborFunctions = require("../dist/neighbor-detector");
const mainFunctions = require("../dist/main");

const { traverse2dArray } = mainFunctions;
const create2dArray = mainFunctions.creade2dArray;
const [lookRight, , , lookDown] = neighborFunctions.neighborDetectorFunctions;
const { neighborCounter } = neighborFunctions;

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
describe("Given a neightbotCounter function", () => {
  describe("When it receives a 1 as first parameter, a 1 as second one and a 3x3 array with 3 adjacents trues as last parameter", () => {
    test("Then it should return a 3", () => {
      const x = 1;
      const y = 1;
      const expected2dArray = [
        [true, false, false],
        [false, false, true],
        [true, false, false],
      ];
      const expectedNumberOfNeighbors = 3;

      const numberOfNeighbors = neighborCounter(x, y, expected2dArray);

      expect(numberOfNeighbors).toBe(expectedNumberOfNeighbors);
    });
  });
  describe("When it receives a 2 as first parameter, a 2 as second one and a 3x3 array with 2 adjacents trues as last parameter", () => {
    test("Then it should return a 3", () => {
      const x = 2;
      const y = 2;
      const expected2dArray = [
        [true, false, false],
        [false, false, true],
        [true, true, false],
      ];
      const expectedNumberOfNeighbors = 2;

      const numberOfNeighbors = neighborCounter(x, y, expected2dArray);

      expect(numberOfNeighbors).toBe(expectedNumberOfNeighbors);
    });
  });
});

describe("Given a traverse2dArray function", () => {
  describe("When it receives a 3x3 array with I pattern of trues", () => {
    test("Then it should return a 3x3 array with a line pattern of trues", () => {
      const userArrayPattern = [
        [false, true, false],
        [false, true, false],
        [false, true, false],
      ];
      const expectedArrayPattern = [
        [false, false, false],
        [true, true, true],
        [false, false, false],
      ];

      const traversedArray = traverse2dArray(userArrayPattern);

      expect(traversedArray).toEqual(expectedArrayPattern);
    });
  });
  describe("When it receives a 3x3 array with box pattern of trues", () => {
    test("Then it should return a 3x3 array with a box pattern of trues", () => {
      const userArrayPattern = [
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ];
      const expectedArrayPattern = [
        [true, true, false],
        [true, true, false],
        [false, false, false],
      ];

      const traversedArray = traverse2dArray(userArrayPattern);

      expect(traversedArray).toEqual(expectedArrayPattern);
    });
  });
  describe("When it receives a 4x4 array with an strange pattern of trues", () => {
    test("Then it should return a 4x4 array with an stange pattern of trues", () => {
      const userArrayPattern = [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
      ];
      const expectedArrayPattern = [
        [false, false, false, false],
        [false, true, true, false],
        [true, false, false, true],
        [false, true, true, false],
        [false, false, false, false],
      ];

      const traversedArray = traverse2dArray(userArrayPattern);

      expect(traversedArray).toEqual(expectedArrayPattern);
    });
  });
});
