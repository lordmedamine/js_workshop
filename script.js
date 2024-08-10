//Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

//Count Characters

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("hello"));

//Capitalize Words

function capitalizeWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello world"));

//Array Functions

function findMax(array) {
  var max = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function findMin(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMin([1, 2, 3, 4, 5]));

//Sum of Array
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

//Filter Array
function filterArray(array, condition) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (condition(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filterArray([1, 2, 3, 4, 5], (x) => x > 2));

//Factorial

function factorial(n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

//Prime Number Check
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

//Fibonacci Sequence
function fibonacci(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var sequence = fibonacci(n - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    return sequence;
  }
}

console.log(fibonacci(5));
