/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    if(numbers.length === 0){
        return undefined; //  array is empty
    }

    let findLargestElement = numbers[0];

    for(let i = 1; i< numbers.length; i++){
        if(numbers[i] > findLargestElement ){
            findLargestElement = numbers[i];
        }
    }
   return findLargestElement;
}

module.exports = findLargestElement;