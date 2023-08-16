function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0){
    sum += arr[i]
    }
  }
  return sum
}


/* 

PREP

Parameter: arr (array of numbers)

Return: return the sum of all the positive ones

Example:
[1,-2,3,4,5] --> 1 + 3 + 4 + 5 = 13

Psuedocode:
1. Get an array of numbers
the parameter is arr, which passes in an array of numbers
2. Return the sum of all the positive ones
for loop through all the elements in the array
then IF/ELSE conditional 
+ operator 


*/