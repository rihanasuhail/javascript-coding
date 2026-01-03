// Closure: in closure, a function returns another function.
// So it keeps track of the scope of the parent function variables even after the parent function
// has returned
// Code outside the closure cannot modify it but only the ones inside that closure

// Create a Counter Function
// const counter = createCounter();
// counter(); // 1
// counter(); // 2

function createCounter() {
  let count = 0;

  return function counter() {
    count++;
    return count;
  };
}

const countA = createCounter(); // this will return a function
console.log(countA()); // it will keep the value of count in memory due to closure and increment it each time it's called
console.log(countA());

function calledOnce(fn) {
  // here fn = (a,b)=> a+b
  let calledAlready = false;
  return function (...args) {
    // here any number of arguments are taken in
    if (!calledAlready) {
      calledAlready = true;
      return fn(...args);
      // here the required number of arguments as per fn function is taken as argument
    }
  };
}

const calling1 = calledOnce((a, b) => a + b);
console.log(calling1(2, 3));
console.log(calling1(4, 5)); // wont return anything as the previous value is remembered due to closure

// Memoization Function
// Cache function results.

function cacheMemo(fn) {
  const cache = {};
  return function (...args) {
    // stringify the args
    const stringifyArgs = JSON.stringify(args);
    if (cache[stringifyArgs]) {
      return cache[stringifyArgs];
    } else {
      const result = fn(...args);
      cache[stringifyArgs] = result;
      return result;
    }
  };
}

const calling2 = cacheMemo((a, b) => a + b);
console.log(calling2(2, 3));
console.log(calling2(2, 3));

// Implement expect(val).toBe(num)
function expect(val) {
  return {
    toBe: function (num) {
      if (val === num) {
        return true;
      } else {
        return false;
        // throw new Error("Values or not equal")
      }
    },
  };
}

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(4));
