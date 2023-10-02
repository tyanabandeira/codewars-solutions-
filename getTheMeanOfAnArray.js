function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let result = 0
  for(let i = 0; i < marks.length; i++){
    result += marks[i] / marks.length
  }
  
  return Math.floor(result)
  
}


/* 

PREP

Parameter:marks (array of numbers)

Return:  average of the marks, rounded to the nearest integer Math.round()

Example: 

Psuedocode:
for loop
find average
round

*/