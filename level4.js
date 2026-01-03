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
