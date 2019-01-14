// sorts an array in assending order
// returns a new sorted array
function mergeSort(arr) {

  if (arr.length === 1) {
    return arr;
  }
  // find the midpoint of the list
  const middle = Math.floor(arr.length / 2);

  // split the array into equal sides
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // recursively sort the subarrays
  return merge(
    mergeSort(left),
    mergeSort(right)
  )

}

// compares each item and returns the result 
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// verify that an array is sorted
function verifySort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }
  return arr[0] < arr[1] && verifySort(arr.slice(1));
}

// run the mergesort on an unsorted array
const unsortedArray = [30, 103, 1, 5, 27, 31, 86, 6, 48, 70, 45, 4, 60];
console.log(`unsorted: ${unsortedArray}`);
let sortedArray = mergeSort(unsortedArray);
console.log(`sorted: ${sortedArray}`);

//verify the results
console.log(`original array is sorted: ${verifySort(unsortedArray)}`)
console.log(`returned array is sorted: ${verifySort(sortedArray)}`)

// try with an odd size array
const newUnsort = [7, 3, 2];
console.log(`unsorted: ${newUnsort}`);
sortedArray = mergeSort(newUnsort);
console.log(`sorted: ${sortedArray}`);