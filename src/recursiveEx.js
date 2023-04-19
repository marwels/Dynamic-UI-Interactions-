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

// The task is to write a function factorial(n) that calculates n! using recursive calls.
// Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6

let factorial = function factorial(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

// Write a function fib(n) that returns the n-th Fibonacci number.

let fib = function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
    //       too slow approach
  }
};

let betterFib = function betterFib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
};

// Let’s say we have a single - linked list
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// loop
let printListLoop = function printListLoop(list) {
  let tmpList = list;
  while (tmpList) {
    console.log(tmpList.value);
    tmpList = tmpList.next;
  }
};
// recursion

let printListRecursion = function printListRecursion(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  } else {
    console.log(list.value);
    printListRecursion(list.next);
  }
};

export { sumToLoop };
export { sumToRecursion };
export { sumToFormula };
export { factorial };
export { betterFib };
export { printListRecursion };
export { printListLoop };
