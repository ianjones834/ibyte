module.exports.Byte = class Byte {
  #byteArray;
  #size;

  constructor(decimal, size) {
    if (decimal > Math.pow(2, size) - 1) {
      throw new Error('Not enough bits for decimal');
    }

    const byte = decimal.toString(2);
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

  shiftLeft = (moves) => {
    let byte = this.#byteArray.join('');
    byte = byte + ''.padStart(moves, '0');
    byte = byte.slice(moves);

    const decimal = parseInt(byte, 2);

    return new Byte(decimal, this.#size);
  }

  shiftRight = (moves) => {
    let byte = this.#byteArray.join('');
    byte = ''.padStart(moves, '0') + byte;
    byte = byte.slice(0, -moves);

    const decimal = parseInt(byte, 2);

    return new Byte(decimal, this.#size);
  }

  xor = (byte) => {
    let dividend = this;
    let divisor = byte;
    
    if (dividend.#size > divisor.#size) {
      divisor = this._padLeft(divisor, dividend.#size);
    }
    else if (dividend.#size < divisor.#size) {
      dividend = this._padLeft(dividend, divisor.#size)
    }

    const resultArray = new Array(dividend.#size);

    for(const i in dividend.#byteArray) {
      if (dividend.#byteArray[i] === divisor.#byteArray[i]) {
        resultArray[i] = '0';
      }
      else {
        resultArray[i] = '1';
      }
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Byte (result, this.#size);
    
  }

  _padLeft = (byte, size) => {
    return new Byte(parseInt(byte._byteArray.join(''), 2), size);
  }
}
