/*Cas Donoghue
CS 290
JavaScript progrraming assigment: Higher Order Functions and Objects
This program will generate an array of Automobiles according to the Automobile class definition. The array of objects will be sorted using 
HOF function principles. The sortes list will be displayed accoridng to assignment specifications. 
*/

/* Automobile class definitions that describe how automobile objects look */
function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

/*the prototype logMe will be added to the Automobile class in such a way that the function is ammeded in the class prototype section
The logMe function takes a boolean variable that when true the year, make model and type are returned. When the function parameter is untrue, 
only the year make and model are returned.  */
Automobile.prototype.logMe = function(typeOrNot) {
    if (typeOrNot) {
        return this.year + " " + this.make + " " + this.model + " " + this.type;
    } else {
        return this.year + " " + this.make + " " + this.model;
    }
}
/*declare an array of Automobile objects)*/
var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. 
You pass it a comparator and an array of objects appropriate for
that comparator and it will return a new array which is sorted
with the largest object in index 0 and the smallest in the last index
I choose to just use the javascript provided sort function. I pass my
custom comparitor to the sort function in the comparator parameter. 
 */
function sortArr( comparator, array ){
    var tempArr = array;
    return tempArr.sort(comparator);
}

/*A comparator takes two arguments and uses some algorithm to compare them. 
If the first argument is larger or greater than the 2nd it returns true,
otherwise it returns false. Here is an example that works on integers
NOTE: THIS IS NOT USED*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison 
rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.
This is a very simple example of a custom comparitor sent to the sort function. It returns index information
for the comparison to the inherent sort function using the values -1,1 and 0. */
function yearComparator( auto1, auto2){
  if (auto2.year < auto1.year) {
    return -1;
  } else if (auto1.year < auto2.year) {
    return 1;
  } else {
    return 0;
  }
}

/*This compares two automobiles based on their make. 
It should be case insensitive and makes which are alphabetically 
earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    var auto1Make = auto1.make.toLowerCase();  //make case insensitive by creating a temp lowercase val
    var auto2Make = auto2.make.toLowerCase();  //
    //Note, it seems that the < and > operators can determine value based on alphabetical precidence. Nice
    if(auto1Make < auto2Make) {
        return -1;
    } else if (auto1Make > auto2Make) {
        return 1; 
    } else {
        return 0;
    }
}

/*This compares two automobiles based on their type. 
The ordering from "greatest" to "least" is as follows:
 roadster, pickup, suv, wagon, (types not otherwise listed). 
 It should be case insensitive. If two cars are of equal type 
 then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    var auto1Type;  //declare variables to record what type of car the object is
    var auto2Type;
    var autoTypeRank = ["roadster", "pickup", "suv", "wagon"]; //here is an array of types listed from "best" to "worst"
    
    //In the following section a type is assigned by accessing the object type parameter. if there is no type, then type is assigned NA
    if (auto1.type) {
        auto1Type = auto1.type.toLowerCase();
    } else {
        auto1Type = "NA";
    }
    if (auto2.type) {
      auto2Type = auto2.type.toLowerCase();
    } else {
        auto2Type = "NA";
    }
    
    /*the following assignment will effectively rank the types according to the order in the autoTypeRank array
     if the type is not found in the rank array it gets -1 (via indexOf function). in order to be useful for my 
     comparison any value that comes up -1 needs to be ranked 4*/
    var auto1Rank = autoTypeRank.indexOf(auto1Type);  
    var auto2Rank = autoTypeRank.indexOf(auto2Type);
    
    if (auto1Rank == -1) {
        auto1Rank = 4;
    }
    if (auto2Rank == -1) {
        auto2Rank = 4;
    }
    //typical comparitor, the only differnece is that in the case that the rank is equal then another check is performed based on model year. 
  if (auto1Rank < auto2Rank) {
    return -1;
  } else if (auto2Rank < auto1Rank) {
    return 1;
  } else {
    if (auto2.year < auto1.year) {
    return -1;
  } else if (auto1.year < auto2.year) {
    return 1;
  } else {
    return 0;
  }
  }
    
}
//This is the forEach function from the class web page "functions pass return" 
//http://eecs.oregonstate.edu/ecampus-video/CS290/core-content/js-functions-objects/functions-pass-return.html
//It will be used to display arrays of objects
function forEach(array, work) {
  for (var i = 0; i < array.length; i++)
    work(array[i]);
}
//This is an inner function for the "work" parameter in the forEach function. It is used to console.log the year, make, mode, AND type (passes true 
// to the logMe function)
function outputType(val) {
    console.log(val.logMe(true));
}
//This is an inner function for the "work" parameter in the forEach function. It is used to console.log the year, make, mode (passes false 
// to the logMe function)
function outputNoType(val) {
    console.log(val.logMe(false));
}

// Declare a temp array with the unsorted automobiles array
var arrayWork = automobiles;


console.log("*****");                                 //print out 5 stars
console.log("The cars sorted by year are:");          //title
arrayWork = sortArr(yearComparator, automobiles);     // assign sorted array to temp array
forEach(arrayWork,outputNoType);                      // print using the forEach function, passing the outputNoType function
console.log();                                        //newline
console.log("The cars sorted by make are:");          //title
arrayWork = sortArr(makeComparator, automobiles);     // assign sorted array to temp array
forEach(arrayWork,outputNoType);                      // print using the forEach function, passing the outputNoType function 
console.log();                                        //newline
console.log("The cars sorted by type are:");          //title
arrayWork = sortArr(typeComparator, automobiles);     // assign sorted array to temp array
forEach(arrayWork,outputType);                        // print using the forEach function, passing the outputNoType function 
console.log("*****");                                 //print out 5 stars




