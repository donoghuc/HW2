/*Cas Donoghue
CS290
jsObjects: the purpose of this code is to write a function that tests equality between two objects
I think that the recursive part is the most intense, the third call to the function (console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));)
is not handled without the recursive call. I tried making an extra function but it still couldnt make the comparison equal. 
*/
/*function notDeepEq(a,b) {
	if (a !== b)
		return true;
}*/ //tried to make a function to be called to compare x[prop],y[prop] but couldnt make it work with the last line

function deepEqual(x,y) {
	// check if objects are equal type equal value (to make the recursion true and to save energy if they are right off the bat)
	if (x === y)
		return true; 
	// check to make sure two objects are provided 
	if (typeof x != "object" || x == null)
		return false;
	else if (typeof y != "object" || y == null)
		return false; 

	//check if objects have equal value and equal type 
	
	//initialize counters for number of props in each object
	var Xprops = 0; 
	var Yprops = 0;

	//count number of properties in each object
	for (var prop in x)
		Xprops += 1; 
	for (var prop in y)
		Yprops += 1; 
	//check to make sure num of props are equal
	if (Xprops != Yprops)
		return false;

	for (var prop in x) {
		if (!(prop in y) || !deepEqual(x[prop], y[prop]))
			return false; 
	} 

	/*for (var prop in x) {  //i wanted to make this work, but for the console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); call it would always return false...
		if (prop in y)
			if (notDeepEq(x[prop],y[prop]))
				return false;
	} */

	return true; 
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
//console.log(deepEqual(4,"string"));
//console.log(obj)