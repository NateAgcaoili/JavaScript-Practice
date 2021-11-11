function myFirstJSFunction() {
    console.log("Function time!");
}

myFirstJSFunction();

function functionWithArgs(a, b) {
    console.log(a + b);
    functionGlobalVar = 10; //because var isn't there, it automatically becomes a global variable
}

functionWithArgs(1, 2);
functionWithArgs("hi", "hello");

var globalVar = 10;
var test = "Dfasdf";


functionWithArgs(globalVar, functionGlobalVar);

function returnFunction(a, b) {
    return a + b;
}

console.log(returnFunction(1, 2));

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(3 == '3'); //true
console.log(3 === '3'); //false
console.log(3 != '3'); //false
console.log(3 !== '3'); //true