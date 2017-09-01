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

function intersection(arr1, arr2) {
  const seenInFirstArray = arr1.reduce((agg, item) => {
    agg[item] = true;
    return agg;
  }, []);

  return arr2.reduce((agg, item) => 
  {
    if (seenInFirstArray[item]) {
      agg.push(item);
    }
    return agg;
  }, []);
}


module.exports.intersection = intersection;
