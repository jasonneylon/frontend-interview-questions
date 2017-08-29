function fib(n) {
  switch(n) {
    case 0: return 0
    case 1: return 1
    default: return  fib(n-1) + fib(n-2);
  }
}

function memo(fn) {
  const m = {};

  return function() {
    const memory = m;
    if (memory[arguments[0]]) {
      return memory[arguments[0]];
    }
    const result = fn.apply(this, arguments);
    memory[arguments[0]] = result;
    return result;
  }
}

fib = memo(fib);

module.exports.fib = fib;
