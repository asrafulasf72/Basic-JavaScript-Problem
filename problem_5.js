/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll:1014 ,department: "cse" };
//write your code here
var PhIdentifiers="@ph.ac.bd"
var PhStudentEmail=student.name+student.roll+"."+student.department+PhIdentifiers;
console.log(PhStudentEmail);
