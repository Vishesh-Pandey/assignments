/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

async function calculateTime(t1, t2, t3) {
  let start = Date.now();

  let promise1 = wait1(t1);
  let promise2 = wait2(t2);
  let promise3 = wait3(t3);

  return promise1
    .then(() => promise2)
    .then((promise) => promise.then(() => promise3))
    .then((promise) => promise.then(() => Date.now() - start));
}

module.exports = calculateTime;
