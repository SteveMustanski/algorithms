// find the index of the min value in the array
function indexOfMin(list) {
  var minIndex = 0;
  for(var i = 0; i < list.length; i++) {
      if (list[i] < list[minIndex]) {
          minIndex = i;
      }
  }
  return minIndex;
}

// loop through list and pop min to sorted
function selectionSort(list) {
  var sortedArr = [];
  while(list.length > 0) {
      var indexToMove = indexOfMin(list);
      sortedArr.push(list.splice(indexToMove, 1)[0]);
  }
  return sortedArr;
}

//array to be sorted
const unsortedArr = [32, 98, 4, 0, 60, 26, 91, 1, 54, 65];

var sorted = selectionSort(unsortedArr);
console.log(sorted);