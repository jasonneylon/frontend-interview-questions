const memo = {};

function fib(n) {
  if (memo[n]) {
    return memo[n];
  }
  let returnValue;
  switch(n) {
    case 0: 
      returnValue = 0;
      break;
    case 1: return 1
      returnValue = 1;
      break;
    default: 
      returnValue = fib(n-1) + fib(n-2);
  }
  memo[n] = returnValue;
  return returnValue;
}

// function memo(fn) {
//   const memory = {};

//   return function() {
//     if (memory[args[0]]) {
//       return (args[0]);
//     }
//     const result = fn(args);
//     memory[args[0]] = result;
//     return result;
//   }
// }


module.exports.fib = fib;
