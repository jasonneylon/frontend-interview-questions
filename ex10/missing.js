function missing(arr) {
  let expectedSum = 0, actualSum = 0;
  arr.forEach((x, index) => {
    expectedSum += (index+1);
    actualSum += x;
  });

  if (expectedSum === actualSum) {
    return null;
  }

  return (expectedSum + (arr.length+1)) - actualSum;
}

module.exports.missing = missing;
