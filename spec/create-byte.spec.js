const { Byte } = require("../src/byte")

describe("Does Byte stuff", function() {

  it("Creates a 8 bit Byte from a decimal", function() {
    const byte = new Byte(12, 8);

    expect(byte).not.toBeNull();
  })

  it("Returns 8 bit string representing 12",  function() {
    const byte = new Byte(12, 8);

    const result = byte.toString();
    const expectedResult = '00001100';

    expect(result).toEqual(expectedResult);
  })

  it("Returns 8 bit string representing 0",  function() {
    const byte = new Byte(0, 8);

    const result = byte.toString();
    const expectedResult = '00000000';

    expect(result).toEqual(expectedResult);
  })


  it("Throws if decimal is larger than bit size", () => {
    expect(() => new Byte(256, 8)).toThrow(new Error('Not enough bits for decimal'));
  })

  it("Returns hexadecimal string representing the decimal 46", () => {
    const byte = new Byte(46, 8);

    const result = byte.toHex();
    const expectedResult = '2e';

    expect(result). toEqual(expectedResult);
  })

  it("Shifts bits left", () => {
    const byte = new Byte(255, 8);

    const result = byte.shiftLeft(2).toString();
    const expectedResult = '11111100';

    expect(result).toEqual(expectedResult);
  });


  it("Shifts bits right", () => {
    const byte = new Byte(255, 8);

    const result = byte.shiftRight(2).toString();
    const expectedResult = '00111111';

    expect(result).toEqual(expectedResult);
  });

  it("Performs xor on two Bytes", () => {
    const firstByte = new Byte(156, 8);
    const secondByte = new Byte(223, 8);

    const result = firstByte.xor(secondByte).toString();
    const expectedResult = '01000011'

    expect(result).toEqual(expectedResult)
  });
})