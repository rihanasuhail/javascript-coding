function reverseString(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

function checkPalindrome(str) {
  let revString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  if (revString === str) {
    return true;
  } else {
    return false;
  }
}

function largestNumberInArray(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

function countVowels(str) {
  const vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelArray.includes(str[i])) {
      count = count + 1;
    }
  }
  return count;
}

// The spread operator takes the value out of something and adds it to the array
// so for example: [...{1,2,3}] becomes [1,2,3]
// const a = [1,2,3]
// const b = [4,5,6]
// then const  c = [...a,...b] => [1,2,3,4,5,6]

// const str = 'hello'
// const arr = [...str]
// then arr = ["h", "e", "l", "l", "o"]

// Spreading objects
// const user = {name: 'Rihana', age: 25}
// const copy = {...user}
// then { name: "Rihana", age: 24 }

// Set removes duplicates from an array
function removeDuplicatesFromArray(arr) {
  const newArr = [...new Set(arr)];
  return newArr;
}

// For numbers from 1 to n:
// If the number is divisible by 3 → print "Fizz"
// If the number is divisible by 5 → print "Buzz"
// If the number is divisible by BOTH 3 and 5 → print "FizzBuzz"
// Otherwise → print the number itself

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  let fact = 1;
  for (let i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

// Sum of All Numbers in an Array can be done using reduce
// Reduces function reduces every element in an array and makes it to a single one
function sumOfItemsInArray(arr) {
  return arr.reduce((acc, item) => acc + item, 0); // where 0 is the initial value of acc field. Acc is the count and item is each element of the array
}

console.log(reverseString("hello"));
console.log(reverseString("Rihana"));
console.log(reverseString("a"));
console.log(reverseString(""));
console.log(reverseString("12345"));
console.log(reverseString("hello world"));
console.log(reverseString("!@#$$#@!"));

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("abba"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("a"));
console.log(checkPalindrome(""));
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("madam "));
console.log(checkPalindrome("12321"));

console.log(largestNumberInArray([1, 2, 3, 4, 5]));
console.log(largestNumberInArray([5, 4, 3, 2, 1]));
console.log(largestNumberInArray([7]));
console.log(largestNumberInArray([-1, -5, -3]));
console.log(largestNumberInArray([1, 5, 5, 3]));
console.log(largestNumberInArray([0, -1, 10, 3]));
console.log(largestNumberInArray([Number.MIN_SAFE_INTEGER, 0]));
console.log(largestNumberInArray([100, 200, 300]));

console.log(countVowels("hello"));
console.log(countVowels("aeiou"));
console.log(countVowels("AEIOU"));
console.log(countVowels("Rihana"));
console.log(countVowels("bcdfg"));
console.log(countVowels("aEiOu"));
console.log(countVowels("hello world"));
console.log(countVowels(""));
console.log(countVowels("a"));
console.log(countVowels("xyz"));
console.log(countVowels("12345"));
console.log(countVowels("a1e2i3o4u"));
console.log(countVowels("!@#aeiou$%"));
console.log(countVowels("😊ae😊"));

console.log(removeDuplicatesFromArray([1, 2, 2, 3]));
console.log(removeDuplicatesFromArray(["a", "b", "a"]));
console.log(removeDuplicatesFromArray([1, "1", 1]));
console.log(removeDuplicatesFromArray([]));

fizzBuzz(1);
fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(15);
fizzBuzz(16);
fizzBuzz(30);
fizzBuzz(0);
fizzBuzz(-5);

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));
console.log(factorial(20));

console.log(sumOfItemsInArray([1, 2, 3]));
console.log(sumOfItemsInArray([10, -5, 5]));
console.log(sumOfItemsInArray([0, 0, 0]));
console.log(sumOfItemsInArray([100]));
console.log(sumOfItemsInArray([]));
