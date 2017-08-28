function indexOf(arr, value) {
  let index = -1;
  arr.forEach((x, i) => {
    if (x === value) { index = i;}
  });
  return index;
}


module.exports.indexOf = indexOf;
