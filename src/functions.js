function capitalize(text) {
  const result = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
  return result;
}

function reverseString(text) {
  let result = "";
  for (let index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }
  return result;
}

class Calculator {
  sum(a, b) {
    return a + b;
  }
  rest(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

function caesarCipher(text, shift) {
  let result = "";
  for (let index = 0; index < text.length; index++) {
    if (/[A-Za-z]/.test(text[index])) {
      result += String.fromCharCode(
        ((text.charCodeAt(index) - 97 + shift) % 26) + 97
      );
    } else {
      result += text[index];
    }
  }
  return result;
}

function analyze(array) {
  let sum = 0;
  let min = array[0];
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
    if (array[index] > max) {
      max = array[index];
    }
    if (array[index] < min) {
      min = array[index];
    }
  }
  
  return {
    average: sum/array.length,
    min,
    max,
    length: array.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyze,
};
