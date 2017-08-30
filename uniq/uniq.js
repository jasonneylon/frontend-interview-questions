function uniq(array) {
  const uniqItems = [];
  const seen = {};
  for (item of array) {
    if (seen[item]) {
      continue;
    }
    seen[item] = item;
    uniqItems.push(item);
  }
  return uniqItems;
}

function* uniq(array) {
  const seen = {};
  for (item of array) {
    if (!seen[item]) {
      yield item;
    }
    seen[item] = item;
  }
}

function uniq(array) {
  const seen = {};
  return array.reduce((uniqItems, item) => {
    if (seen[item]) {
      return uniqItems;
    }
    seen[item] = item;
    uniqItems.push(item);
    return uniqItems;
  }, []);
}


const uniqiterator = (x) => Array.from(uniq(x));

module.exports.uniq = uniqiterator;
module.exports.uniq = uniq;
