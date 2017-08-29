function fib(n) {
  switch(n) {
    case 0: return 0
    case 1: return 1
    default: fib(n-1) + fib(n-2)
  }
}

function fib(n) {
  const fibs = [1,1];
  for(let i=2; i<n; i++) {
    fibs.push(fibs[i-1] + fibs[i-2]);
  }
  return fibs[(n-1)];
}

module.exports.fib = fib;
