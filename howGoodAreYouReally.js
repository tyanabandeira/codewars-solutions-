function betterThanAverage(classPoints, yourPoints) {
  let sum = 0
   for(let i = 0; i < classPoints.length; i++){ //iterating through the classPoints  
   sum += classPoints[i]
 
  }
    sum = sum / classPoints.length
   
   return yourPoints > sum
   
 }
 
 
 
 
 /*
 PREP
 
 Parameter: classPoints(an array of numbers), yourPoints(number)
 
 Return:return True if your're better, else False
 
 Example: 
 [8,9,9], 10 should return True
 
 Psuedocode:
 1. Calculate the average of the classpoints, but add your point to the given array
 Calculate average by adding all the numbers and multiply by the amount of numbers there
 2. Compare your score with the average of the classes score
 IF/ELSE
 */