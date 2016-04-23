/*Cas Donoghue
CS290
ACTIVITY JS functions
The purpose of this code is to show that a JS function can be called before it is "defined" (hoisting) but only when it is not defined as part of a variable declaration. 
*/

console.log("Calling a function defined below this call: ", below());

function below() {
	return "Hello from below. Hoisting Works!";
}

console.log("Calling a variable function declared/defined below this call", variableBelow()); //this gives you a type error bc it has not been defined above the call. 

var variableBelow = function() {
	return "Hello from below. Hoisting does not work :(";
}

console.log("Calling the variableBelow function defined above:", variableBelow()); //comment out line 13 and this will run wo error