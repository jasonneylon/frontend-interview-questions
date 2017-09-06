function includes(arr, item) {
  const middleIndex = Math.floor(arr.length / 2);
  const middleItem = arr[middleIndex];
  if (middleItem === item) {
    return true;
  }
  if (arr.length <= 1) {
    return false;
  }
  const searchSpace = (middleItem < item) ? arr.slice(middleIndex) : arr.slice(0, middleIndex);
  return includes(searchSpace, item);
}

module.exports.includes = includes;
