module.exports.Byte = class Byte {
  _byteArray;
  _size;

  constructor(decimal, size) {
    if (decimal > Math.pow(2, size) - 1) {
      throw new Error('Not enough bits for decimal');
    }

    const byte = decimal.toString(2);
    const padSize = size - byte.length;

    const pad = ''.padStart(padSize, '0');

    this._byteArray = (pad + byte).split('');
    this._size = size
  }

  toString = () => {
    return this._byteArray.join('');
  }

  toHex = () => {
    return parseInt(this._byteArray.join(''), 2).toString(16);
  }

  shiftLeft = (moves) => {
    let byte = this._byteArray.join('');
    byte = byte + ''.padStart(moves, '0');
    byte = byte.slice(moves);

    const decimal = parseInt(byte, 2);

    return new Byte(decimal, this._size);
  }

  shiftRight = (moves) => {
    let byte = this._byteArray.join('');
    byte = ''.padStart(moves, '0') + byte;
    byte = byte.slice(0, -moves);

    const decimal = parseInt(byte, 2);

    return new Byte(decimal, this._size);
  }

  xor = (byte) => {
    let dividend = this;
    let divisor = byte;
    
    if (dividend._size > divisor._size) {
      divisor = this._padLeft(divisor, dividend._size);
    }
    else if (dividend._size < divisor._size) {
      dividend = this._padLeft(dividend, divisor._size)
    }

    const resultArray = new Array(dividend._size);

    for(const i in dividend._byteArray) {
      if (dividend._byteArray[i] === divisor._byteArray[i]) {
        resultArray[i] = '0';
      }
      else {
        resultArray[i] = '1';
      }
    }

    const result = parseInt(resultArray.join(''), 2);

    return new Byte (result, this._size);
    
  }

  _padLeft = (byte, size) => {
    return new Byte(parseInt(byte._byteArray.join(''), 2), size);
  }
}