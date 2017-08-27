function filter(arr, fn) {
  const filtered = [];
  arr.forEach(function(x) {
    if (fn(x)) {
      filtered.push(x);
    }
  });
  return filtered;
}

function filter(arr, fn) {
  return arr.reduce(function(agg, x) {
    if (fn(x)) {
      agg.push(x);
    }
    return agg;
  }, []);
}

module.exports.filter = filter;
