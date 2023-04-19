// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n
// Using a for loop.
let sumToLoop = function sumToLoop(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
};

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

export { sumToLoop };
