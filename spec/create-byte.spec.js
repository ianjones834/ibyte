const { Bits } = require("../src/bits")

function getTestData() {
  const testData = [];

  for (let bitSize = 1; bitSize <= 8; bitSize++) {
    for (let integer = 0; integer < Math.pow(2, bitSize); integer++) {
      testData.push({
        integer,
        bits: new Bits (integer, bitSize)
      });
    }
  }

  return testData;
}

let binaryString = null;
describe("Bits", function() {

  it("Bits creation", function() {
    getTestData().forEach((bits) => {
      expect(bits).not.toBeNull();
    });     
  });

  it("toString method", function() {
    getTestData().forEach((data) => {
      const result = parseInt(data.bits.toString(), 2)
      const expectedResult = data.integer

      expect(result).toEqual(expectedResult);
    });
  });
  
  it("toHex method", function() {
    getTestData().forEach((data) => {
      const result = parseInt(data.bits.toHex(), 16);
      const expectedResult = data.integer;

      expect(result).toEqual(expectedResult);
    });
  });
  
  it("toInteger method", function() {
    getTestData().forEach((data) => {
      const result = data.bits.toInteger();
      const expectedResult = data.integer;
    });
  });
  
  it("shiftLeft method", function() {
    getTestData().forEach((data) => {
      const bitSize = data.bits.toString().length;

      for (let moves = 0; moves <= bitSize; moves++) {
        const result = data.bits.shiftLeft(moves).toInteger();
        const expectedResult = ;

        expect(result).toEqual(expectedResult);
      }
    });
  });
  
  it("shiftRight method", function() {
    getTestData().forEach((data) => {
      const bitSize = data.bits.toString().length;

      for (let moves = 0; moves < bitSize; moves++) {
        const result = data.bits.shiftRight(moves).toInteger();
        const expectedResult = Math.floor(data.integer / (Math.pow(2, moves)));

        expect(result).toEqual(expectedResult);
      }
    });
  });
});
