function reduce(arr, fn, initialValue) {
  let agg = initialValue;
  arr.forEach((x) => agg = fn(agg, x));
  return agg;
}


module.exports.reduce = reduce;
