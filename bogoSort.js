// Randomly shuffle elements of the array
function shuffleArray(arr) {
  var swapIndex = arr.length;
  var temp, randomIndex;

  while (swapIndex !== 0) {
    randomIndex = Math.floor(Math.random() * swapIndex);

    swapIndex -= 1;

    temp = arr[swapIndex];
    arr[swapIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

// Returns true if array is sorted, false if not.
function isSorted(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}
// randomly shuffles array until it is sorted.
function bogoSort(arr) {
  let loops = 0;
  while (isSorted(arr) == false) {
    loops += 1;
    array = shuffleArray(arr);
  }
  // log the number of times it took to produce a randoly sorted list
  console.log(loops);
  return arr;
}

const unSorted = [29, 100, 1, 2, 57];

var sorted = bogoSort(unSorted);
console.log(sorted);