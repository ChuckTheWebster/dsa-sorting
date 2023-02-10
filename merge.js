'use strict';

/** merge: Takes in two sorted arrays and returns a new array with values
 * from both arrays sorted
 *
 * arr1: Array
 * arr2: Array
 *
 * returns: New array
 */

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      merged.push(arr2[j]);
      j++;
    } else {
      merged.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

/** mergeSort: takes in one array and returns sorted array with merge sort
 * algorithm
 *
 * arr: Array
 *
 * returns: New array
 */

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));

  return merge(leftArr, rightArr);
}

module.exports = { merge, mergeSort};