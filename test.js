
function fun(x,y) {

	if (typeof x != "object" || x == null)
		return false;
	else if (typeof y != "object" || y == null)
		return false; 

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
		console.log("diff num of properties");

	for (var prop in x) {
		if (prop in y) 
			eq(x[prop],y[prop]);
	}

}

function eq(a,b) {
		if (a !== b) 
			console.log("not Equal:",a,b);
		if (a === b)
			console.log("equal:",a,b)
	}

var obj = {here: {is: "an"}, object: 2};
fun(obj, {here: {is: "an"}, object: 2});