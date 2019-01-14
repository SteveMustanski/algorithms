# Algorithms

This repo contains some practice code for implementing various algorithms in javascript.

The exercises are from the Treehouse track "Algorithms and Data Structures".  In the course, these functions are written in Python to show the
examples.  This repo contains those examples written in javascript.

## Listing of code

* linearSearch.js - implements a linear search to find the index of a target within an array.
* binarySearch.js - implements a binary search function to find the index of a target within an array.
* recursiveBinarySearch.js - implements a binary search function that uses recursion to find the target within an array.
* arrays.js - examples of common array operations.
* linkedList.js - builds out an example of a linked list and common operations.
* mergeSort.js - uses a sort algorithm that calls itself recursively to split and compare arrays in order to sort an array.
* bogoSort.js - randomly reshuffles an array until it is sorted (probably the worst way to do a sort).
* selectionSort.js - loops through finding the min value of an array and pops it to the sorted array.
* quickSort.js - recursively pick the first item in an array and make two sub arrays of values greater and less than the first.  Merge them back to get the sorted arrary.

## Running the examples

To run the examples, you will need to have node installed on your machine.

To execute a function you can type
`node function_name`

For exampele, to execute binarySearch.js, run the following command
`node binarySearch.js`