// DESCRIPTION:
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//My Solution

function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  if(input === null || input.length === 0){
      return []
    }
  for(let i = 0; i < input.length; i++) {
    if(input[i] > 0){
      count++
    }else if(input[i] < 0){
      sum += input[i]
    }
  }return [count, sum]
}