function isNumeric(number) {
  return !isNaN(parseFloat(number)) && isFinite(number);
}

function checkValue() {
  var value;
  do {
    value =  prompt("Введите число больше 100");
    console.log(isNumeric(value));
  } while (value && (value <= 100 || isNumeric(value) === false));
}

function showSimpleInt(value) {
  var simpleInt;

  for (var i = 2; i <= value; i++) {
    for (var j = 2; j <= i; j++) {
      if (i % j === 0 && i !== j) {
        simpleInt = null;
        break;
      }
      simpleInt = i;
    }
    if (simpleInt !== null) {
      console.log("simple integer: " + simpleInt);
    }
  }
}

function showFizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i + " Fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i + " Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + " FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

function calculateCharAmount(str, char) {
  var amount = 0;
  var upperChar = char.toUpperCase();
  var lowerChar = char.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (upperChar === str[i] || lowerChar === str[i]) {
      amount++;
    }
  }
  return amount;
}

function generateRandomNumber(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

function showFibonacciNumber(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  var secondPrevInt = 0;
  var firstPrevInt = 1;
  var integer;

  for (var i = 2; i <= number; i++) {
    integer = secondPrevInt + firstPrevInt;
    secondPrevInt = firstPrevInt;
    firstPrevInt = integer;
  }
  return integer;
}

function showFibonacciNumberRecursion(number) {
  if (number === 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return showFibonacciNumberRecursion(number - 1) + showFibonacciNumberRecursion(number - 2);
}

function reverseString(str) {
  var newStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

checkValue();
showSimpleInt(10);
showFizzBuzz();
console.log("amount of chars in string: " + calculateCharAmount("What are you doing here", "W"));
console.log("random number: " + generateRandomNumber(1, 20));
console.log("Fibonacci number: " + showFibonacciNumber(10));
console.log("Fibonacci number recursion: " + showFibonacciNumberRecursion(10));
console.log("reverse string: " + '"' + reverseString("no lemon, no melon") + '"');