/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });

  return promise;
}

function wait2(t) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });

  return promise;
}

function wait3(t) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });

  return promise;
}

function calculateTime(t1, t2, t3) {
  let startTime = Date.now();

  let promise1 = wait1(t1);
  let promise2 = wait2(t2);
  let promise3 = wait3(t3);

  let finalPromise = Promise.all([promise1, promise2, promise3]);

  return finalPromise.then(() => {
    return Date.now() - startTime;
  });

  //   return finalPromise;
}

module.exports = calculateTime;
