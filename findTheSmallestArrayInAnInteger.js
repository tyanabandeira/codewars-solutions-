class SmallestIntegerFinder {
  findSmallestInt(args) {
      let num = args[0] // num is equal to first element in the array
    for(let i = 1; i < args.length; i++){ // iterating through each element in the array
      if(args[i] < num){ // comparison of each of the elements
        num = args[i]
      }
    }
    return num
  }
}

// also Math.min(...args)


/*
PREP

Parameter: args (an array of integers)

Return: the smallest integer

Example:
[5,4,8,10] --> 4


Psuedocode:
1. Give an array of integers which is args the parameter
2. Find the smallest integer
for loop, to iterate through each element in an array
IF/ELSE to get the smallest integer in that array


*/