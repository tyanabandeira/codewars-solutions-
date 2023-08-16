function basicOp(operation, value1, value2){
  switch(operation) {
      case '+':
      return value1 + value2
      case '-':
      return value1 - value2
      case '*':
      return value1 * value2
      case '/':
      return value1 / value2
      default:
      return 0
  }
  
 }
 
 /*
 
 PREP
 
 Parameter: operation(string/char), value1 (number), value2 (number)
 
 
 Return: return results of numbers 
 
 
 Example:
 ('-' 7,3) --> 4
 
 Pseudocode:
 1. Create a function that does four basic math operations
 function is already created
 2. Return results of numbers after applying the chosen operation
 switch case or ternary 
 
 */