function insertionSort(arr) {
  return arr.reduce((sortedArray, item) => {
    let insertPosition = sortedArray.length;
    sortedArray.some((sortedItem, i) => {
      if (sortedItem > item) {
        insertPosition = i;
        return true;
      }
      return false;
    });
    sortedArray.splice(insertPosition, 0, item);
    return sortedArray;
  }, []);
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const left = arr[i];
      const right = arr[j];
      if (right < left) {
        arr[i] = right;
        arr[j] = left;
      }
    }
  }
  return arr;
}


function mergeHalves(sortedLeft, sortedRight) {
  const sortedArray = [];
  let leftItem = sortedLeft.shift();
  let rightItem = sortedRight.shift();
  do  {
    if (leftItem < rightItem || rightItem === undefined) {
      sortedArray.push(leftItem);
      leftItem = sortedLeft.shift();
    } else {
      sortedArray.push(rightItem);
      rightItem = sortedRight.shift();
    }
  } while (sortedLeft.length || sortedRight.length || leftItem || rightItem);
  return sortedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midpoint = (arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return mergeHalves(sortedLeft, sortedRight);
}


module.exports.sort = mergeSort;
