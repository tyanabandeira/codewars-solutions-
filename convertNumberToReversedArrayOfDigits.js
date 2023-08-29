function digitize(n) {
  return n.toString().split('').reverse('').map(Number)

}


/*

PREP

Parameter: non-negative number (n)

Return: the digits in an array in reverse order

Example: 
54325 --> [,5,2,3,4,5]

Pseudocode:
1. Given a random non-negative number
a function is already provided taking in a parameter of n
2. Return the digits of this number within an array in reverse order
.reverse()
.split()
.join()

*/