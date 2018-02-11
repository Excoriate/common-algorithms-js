/*
  A JavaScript module which performs a counting sort on a given array of numbers, ordering the elements from lowest to highest.
*/

'use strict'

module.exports = function (array) {
  var min = 0
  var max = 0
  var val = 0
  var counts = null
  var i = null
  var j = null
  for (i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
    } else {
      if (max < array[i]) max = array[i]
    }
  }
  for (i = -1; i < array.length; i++) i === -1 ? counts = new Array(max - min + 1).fill(0) : counts[array[i] - min]++
  for (i = 0; i < counts.length; i++) for (j = 0; j < counts[i]; j++) array[val++] = i + min
  return array
}
