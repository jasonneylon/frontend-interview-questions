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


function binarySearch(arr, item, leftIndex, rightIndex) {
  const midIndex = Math.floor((rightIndex + leftIndex) / 2)
  const current = arr[midIndex];
  if (current === item) {
    return midIndex;
  }
  if (rightIndex < leftIndex) {
    return -1;
  }

  if (current < item) {
    return binarySearch(arr, item, (midIndex + 1), rightIndex) 
  } else {
    return binarySearch(arr, item, leftIndex, (midIndex - 1)); 
  }
}

function includes(arr, item) {
  const index = binarySearch(arr, item, 0, (arr.length-1));
  return (index !== -1);
}

module.exports.includes = includes;
