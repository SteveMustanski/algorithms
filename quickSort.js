function quicksort(values) {
  if (values.length <= 1) {
      return values
  }
  var lessThanPivot = [];
  var greaterThanPivot = [];
  var pivot = values[0];
  for (var i = 1; i < values.length; i++) {
      // determine left and right of pivot
      if (values[i] <= pivot) {
          lessThanPivot.push(values[i]);
      } else {
          greaterThanPivot.push(values[i]);
      }
  }
  return quicksort(lessThanPivot).concat(pivot, quicksort(greaterThanPivot));
}

// array to be sorted
const unsortedArr = [30, 103, 1, 5, 27, 31, 86, 6, 48, 70, 45, 4, 60];

var sorted = quicksort(unsortedArr);
console.log(sorted);