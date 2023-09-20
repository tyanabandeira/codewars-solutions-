function findAverage(array) {
  
  let sum = 0
  if(array.length === 0){
    return 0
  }
  
  for(let i = 0; i < array.length; i++){

    sum += array[i]   
  
  }
  
  return sum / array.length
}

/*

PREP

Parameter: array of numbers (array) [1,2,3,4]


Return: the average of the numbers given


Example:
[1,4,5] --> [3.33]


Psuedcode:
1. Write a function 
function is already created
2. Calculate the average of numbers in a given list
declare a variable called sum and equal it to 0
create a for loop, to loop through the array of numbers
calculate the average by adding all the elements then dividing by the number of elements in the array
return the sum

*/