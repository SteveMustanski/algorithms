// binary search for a number in a sorted array

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(list, target) {
  let first = 0;
  let last = list.length - 1;

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] < target) {
      first = midpoint + 1;
    } else {
      last = midpoint - 1;
    }
  }
  return -1;
}

// function that verifies the search is working
function verify(index) {
  if (index >= 0) {
    console.log(`target was found at index: ${index}`);
  } else {
    console.log('Target not found');
  }
}

let result = binarySearch(numbers, 8);

verify(result);

