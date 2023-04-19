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

let sumToRecursion = function sumToRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return n + sumToRecursion(n - 1);
  }
};
// Using the arithmetic progression formula.
let sumToFormula = function sumToFormula(n) {
  let sum = ((2 * 1 + (n - 1) * 1) / 2) * n;
  return sum;
};

export { sumToLoop };
export { sumToRecursion };
export { sumToFormula };
