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

// shifty implementation
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

// array index implementation
//
function mergeHavles(left, right) {
  let indexLeft = 0;
  let indexRight = 0;
  const result = [];
  while (indexLeft < left.length, indexRight < right.length) {
    const smallest = left[indexLeft] < right[indexRight] ? left[indexLeft++] : right[indexRight++];
    result.push(smallest);
  }
  return result;
}



function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const midpoint = Math.floor(arr.length / 2);
  const left = arr.slice(0, midpoint);
  const right = arr.slice(midpoint);
  return mergeHalves(mergeSort(left), mergeSort(right));
}


module.exports.sort = mergeSort;
