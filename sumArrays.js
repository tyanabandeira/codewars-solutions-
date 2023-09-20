// Sum Numbers
function sum (numbers) {
   
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i] 
  }
    
  return sum
    
};


/* 

PREP

Parameter: an array of numbers (numbers)  [2,3,4,5]


Return: the sum of array of numbers


Example: [2,3,4,5] --> [14]


Psuedocode:
1. Write a function that take an array of numbers 
function is already created
2. Return the sume of the numbers 
declare a variable called sum and equal it to 0
create a for loop through the array of numbers 
then add each element in the array +=
then return sum

*/