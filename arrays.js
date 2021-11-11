var myArray = ["hey", 2, [1, 2, "what's up"]];
console.log(myArray[2]);
myArray.push(2); //adds 2 to end of array
console.log(myArray);
var shifted = myArray.shift(); //removes first element
console.log(myArray);
console.log(shifted);
myArray.unshift(shifted);
console.log(myArray); //adds element to beginning of array