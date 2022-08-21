module.exports.Bits = class Bits {
  #byteArray;
  #size;

  constructor(integer, size) {
    if (integer > Math.pow(2, size) - 1) {
      throw new Error('Not enough bits for decimal');
    }

    const byte = integer.toString(2);
    const padSize = size - byte.length;

    const pad = ''.padStart(padSize, '0');

    this.#byteArray = (pad + byte).split('');
    this.#size = size;
  }

  toString = () => {
    return this.#byteArray.join('');
  }

  toHex = () => {
    return parseInt(this.#byteArray.join(''), 2).toString(16);
  }

  toInteger = () => {
    return parseInt(this.#byteArray.join(''), 2);
  }

  shiftLeft = (moves) => {
    let byte = this.#byteArray.join('');
    const pad = ''.padStart(moves, '0')
    
    byte = (byte + pad).slice(moves);
    const decimal = parseInt(byte, 2);

    return new Bits(decimal, this.#size);
  }

  shiftRight = (moves) => {
    if (moves === 0) {
      return this;
    }

    let byte = this.#byteArray.join('');
    const pad = ''.padStart(moves, '0');

    byte = (pad + byte).slice(0, -moves);
    const decimal = parseInt(byte, 2);

    return new Bits(decimal, this.#size);
  }

  and = (byte) => {
    let firstByte = this;
    let secondByte = byte;
    let resultSize = this.#size;

    if (firstByte.#size > secondByte.#size) {
      secondByte = this.#padLeft(secondByte, firstByte);
      resultSize = firstByte.#size;
    }
    else if (firstByte.#size < secondByte.#size) {
      firstByte = this.#padLeft(firstByte, secondByte);
      resultSize = secondByte.#size;
    }

    const resultArray = new Array(resultSize);

    for (const i in firstByte.#byteArray) {
      if (firstByte.#byteArray[i] === '1' && secondByte.#byteArray[i] === '1') {
        resultArray[i] = '1'
      }
      else {
        resultArray[i] = '0'
      }  
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Bits(result, resultSize);
  }

  or = (byte) => {
    let firstByte = this;
    let secondByte = byte;
    let resultSize = this.#size;

    if (firstByte.#size > secondByte.#size) {
      secondByte = this.#padLeft(secondByte, firstByte);
      resultSize = firstByte.#size;
    }
    else if (firstByte.#size < secondByte.#size) {
      firstByte = this.#padLeft(firstByte, secondByte);
      resultSize = secondByte.#size;
    }

    const resultArray = new Array(resultSize);

    for (const i in firstByte.#byteArray) {
      if (firstByte.#byteArray[i] === '1' || secondByte.#byteArray[i] === '1') {
        resultArray[i] = '1'
      }
      else {
        resultArray[i] = '0'
      }  
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Bits(result, resultSize);
  }

  nand = (byte) => {
    let firstByte = this;
    let secondByte = byte;
    let resultSize = this.#size;

    if (firstByte.#size > secondByte.#size) {
      secondByte = this.#padLeft(secondByte, firstByte);
      resultSize = firstByte.#size;
    }
    else if (firstByte.#size < secondByte.#size) {
      firstByte = this.#padLeft(firstByte, secondByte);
      resultSize = secondByte.#size;
    }

    const resultArray = new Array(resultSize);

    for (const i in firstByte.#byteArray) {
      if (firstByte.#byteArray[i] === secondByte.#byteArray[i]) {
        resultArray[i] = '1'
      }
      else {
        resultArray[i] = '0'
      }  
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Bits(result, resultSize);
  }

  xor = (byte) => {
    let firstByte = this;
    let secondByte = byte;
    let resultSize = this.#size

    if (firstByte.#size > secondByte.#size) {
      secondByte = this.#padLeft(secondByte, firstByte);
      resultSize = firstByte.#size;
    }
    else if (firstByte.#size < secondByte.#size) {
      firstByte = this.#padLeft(firstByte, secondByte);
      resultSize = secondByte.#size;
    }

    const resultArray = new Array(resultSize);

    for (const i in firstByte.#byteArray) {
      if (firstByte.#byteArray[i] === secondByte.#byteArray[i]) {
        resultArray[i] = '0';
      }
      else {
        resultArray[i] = '1';
      }
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Bits(result, resultSize);
    
  }

  #padLeft = (byte, size) => {
    return new Bits(parseInt(byte.#byteArray.join(''), 2), size.#size);
  }
}
