// executes a binary search to find a name in a list

function indexOfItem(arr, target) {
  var first = 0;
  var last = arr.length - 1;
  while (first <= last) {
      midpoint = Math.floor(arr.length / 2);
      if (arr[midpoint] === target) {
          return midpoint;
      } else if (arr[midpoint] < target) {
          first = midpoint + 1;
      } else {
          last = midpoint - 1;
      }
  }
  return null;
}

// Note that this array is now sorted!
const names = ["Dave Murray", "Eddie Van Halen", "George Lynch", "Jake E. Lee"];

var index = indexOfItem(names, "George Lynch");
console.log(index);