// Delay Function using Promise
// A promise represents “something that will finish later”
// a promise can either be resolved or rejected

async function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Timed out");
      resolve(); // resolve() tells that the promise has been reolved at this moment
    }, ms);
  });
}
delay(5000);

// Fetch Data from an API
// Async allows you to use await
// fetch and response.json returns promises, so await must be used
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
fetchData("https://jsonplaceholder.typicode.com/users");

async function retryPromise(fn, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
    }
  }
}

// Execute Promises Sequentially
// Concepts: async flow control
// The setTimeout() method calls a function after a number of milliseconds.
const tasks = [
  () => new Promise((res) => setTimeout(() => res("Task1 completed"), 2000)),
  () => new Promise((res) => setTimeout(() => res("Task2 completed"), 2000)),
  () => new Promise((res) => setTimeout(() => res("Task3 completed"), 2000)),
  () => new Promise((res) => setTimeout(() => res("Task4 completed"), 2000)),
];
// finish the promise successfully and then return the value within res()

async function resolvePromises(tasks) {
  for (let task of tasks) {
    const result = await task();
    console.log(result);
  }
}
resolvePromises(tasks);
