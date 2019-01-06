const numbers = [1,2,3,4,5,6,7,8,9,10];

function linearSearch(list, target) {
  // return position of target if found
  
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
    // return -1 if nothing is found
  } 
  return -1;
}

function verify(index) {
  if (index >= 0) {
    console.log(`target was found at index: ${index}`);
  } else {
    console.log('Target not found');
  }
}

let result = linearSearch(numbers, 8);

verify(result);