function isPrime(n) {
  if (n < 2) { return false; }
  if (n === 2) { return true; }
  for (let divider = 2; divider < n; divider++) {
    if (n % divider === 0) {
      return false;
    }
  }
  return true;
}

module.exports.isPrime = isPrime;
