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
  

// describe("Bits to String", function() {
//   for (let bitSize = 1; bitSize <= 8; bitSize++) {
//     for (let decimal = 0; decimal < Math.pow(2.bit))
//   }
// })

// describe("Does Byte stuff", function() {

//   it("Creates a 8 bit Byte from a decimal", function() {
//     const byte = new Bits(12, 8);

//     expect(byte).not.toBeNull();
//   })

//   it("Returns 8 bit string representing 12",  function() {
//     const byte = new Bits(12, 8);

//     const result = byte.toString();
//     const expectedResult = '00001100';

//     expect(result).toEqual(expectedResult);
//   })

//   it("Returns 8 bit string representing 0",  function() {
//     const byte = new Bits(0, 8);

//     const result = byte.toString();
//     const expectedResult = '00000000';

//     expect(result).toEqual(expectedResult);
//   })


//   it("Throws if decimal is larger than bit size", () => {
//     expect(() => new Bits(256, 8)).toThrow(new Error('Not enough bits for decimal'));
//   })

//   it("Returns hexadecimal string representing the decimal 46", () => {
//     const byte = new Bits(46, 8);

//     const result = byte.toHex();
//     const expectedResult = '2e';

//     expect(result). toEqual(expectedResult);
//   })

//   it("Shifts bits left", () => {
//     const byte = new Bits(255, 8);

//     const result = byte.shiftLeft(2).toString();
//     const expectedResult = '11111100';

//     expect(result).toEqual(expectedResult);
//   });

//   it("Shift bits left", () => {
//     const byte = new Bits(4, 8);

//     const result = byte.shiftLeft(2).toString();
//     const expectedResult = '00010000';

//     expect(result).toEqual(expectedResult);
//   });


//   it("Shifts bits right", () => {
//     const byte = new Bits(255, 8);

//     const result = byte.shiftRight(2).toString();
//     const expectedResult = '00111111';

//     expect(result).toEqual(expectedResult);
//   });

//   it("Shifts bits right", () => {
//     const byte = new Bits(4, 8);

//     const result = byte.shiftRight(2).toString();
//     const expectedResult = '00000001';

//     expect(result).toEqual(expectedResult);
//   });

//   it("Performs xor on two Bytes", () => {
//     const firstByte = new Bits(156, 8);
//     const secondByte = new Bits(223, 8);

//     const result = firstByte.xor(secondByte).toString();
//     const expectedResult = '01000011'

//     expect(result).toEqual(expectedResult)
//   });

//   it("Performs xor on two bytes", () => {
//     const firstByte = new Bits(36, 7);
//     const secondByte = new Bits(223, 9);

//     const result = firstByte.xor(secondByte).toString();
//     const expectedResult = '011111011';

//     expect(result).toEqual(expectedResult)
//   });
// })
