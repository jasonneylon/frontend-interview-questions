function factorial(n) {
  if (n < 2) {
      return 1;
  }
  let product = 1;
  for (let x=2; x <= n; x++) {
    product *= x;
  }
  return product;
}

function range(start, end) {
  return Array.from(function*(start, end) {
    while (start <= end){
      yield start++;
    }
  }(start,end));
}

// more functional implementation
function factorial(n) {
  if (n < 2) {
      return 1;
  }
  return range(1, n).reduce((agg, x) => agg * x);
}

module.exports.factorial = factorial;
