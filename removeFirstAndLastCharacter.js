function removeChar(str){
  
  return str.slice(1, str.length-1)
     
  };
  
  
  /* 
  
  PREP:
  
  Paremeter: str (string)
  
  Return: the first and last character removed
  
  Example: [racecar] --> 'aceca'
  
  Psuedocode:
  1. remove the first and last character of a string
  - for loop through the string 
  - use CharAt to remove the characters
  - index[0] first element
  - str.length - 1 last character 
  - maybe IF/ELSE conditional for strings with less than two characters 
  
  -SLICE REMOVES THE CHARACTERS
  
  */