/**
 * Arithmetic operator = operands (values, variables, etc).
 *                       operators (+ 0 * /)
 *                       ex. 11 = s + 5;
 */

let students = 30;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 2;
console.log(students);
console.log("===========")

let newStudents = 20;

//augmented assignment operators +=, -=, *=, etc.
newStudents += 1; 
newStudents -= 1;
newStudents *= 2;
newStudents **= 3;
newStudents %= 2;
console.log(newStudents);
console.log("============")

/*
Operator precedence:
1. parenthesis ()
2. exponents *
3. multiplication & division & modulo
4. addition & subtraction  
*/ 
let results = 1 + 2 * 3 + 4 ** 2;
console.log(results);

let newResults = 6 / 2 ** 7;
console.log(newResults);

