function simpleMultiplication(number) {
  if(number % 2 === 0){
    return number * 8
  }else{
    return number * 9
  }
}

// return number % 2 === 0 ? number * 8 : number * 9

/*

PREP

Parameter: number 

Return: return a number multiplied by 8(even) or 9(odd)

Example:
[2] --> 2 * 8
[3] --> 3 * 9

Pseudocode:
1. Given a number, any number 
2. Multiply by 8, if it is an even number, multiply byb 9 otherwise
IF/ELSE or ternanry 

*/