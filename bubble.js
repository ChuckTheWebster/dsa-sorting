'use strict';

/** bubbleSort: Sorts elements of an array with bubble sort algorithm
 *
 * array: Array
 *
 * returns: Same array sorted
 */

function bubbleSort(array) {
  for (let i = array.length; i > -1; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}

module.exports = bubbleSort;

// bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// bubbleSort([1, 2, 3]); // [1, 2, 3]
// bubbleSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
//     23, 2, 453, 546, 75, 67, 4342, 32
// ];

// bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,
//                   // 75, 232, 232, 453, 546, 4342]