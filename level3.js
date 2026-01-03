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
