function intersection(arr1, arr2) {
  const seenInFirstArray = {};
  const seenInBoth = [];
  for (const item of arr1) {
    seenInFirstArray[item] = true;
  }
  for (const item of arr2) {
    if (seenInFirstArray[item]) {
      seenInBoth.push(item);
    }
  }
  return seenInBoth;
}

module.exports.intersection = intersection;
