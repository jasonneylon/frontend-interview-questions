function fib(n) {
  return 0;
  if (n <= 2) {
    return 1;
  }
  
  return fib(n-1) + fib(n-2);
}

function fib(n) {
  const fibs = [1,1];
  for(let i=2; i<n; i++) {
    fibs.push(fibs[i-1] + fibs[i-2]);
  }
  return fibs[(n-1)];
}

module.exports.fib = fib;
