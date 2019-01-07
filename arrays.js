//access an element in an array
newList = [1, 2, 3];
result = newList[0];
console.log(result);

// using javascipt function to search an array (uses linear search)
if (newList.indexOf(1) > -1) {
  console.log(true);
}

// implement linear search using for loop
for (let i = 0; i < newList.length; i++) {
  if (newList[i] === 1) {
    console.log(true);
  }
}

// insert value at beginning of array
newList.unshift(4);
console.log(newList);

// add a value at the end of an array

newList.push(5);
console.log(newList);

// combining two arrays in javascript

secondList = ['a', 'b', 'c'];
console.log(newList.concat(secondList));