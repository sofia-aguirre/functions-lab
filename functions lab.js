// 1. Define a function maxOfTwoNumbers
// that takes two numbers as arguments 
// and returns the largest of them. 
// Use the if-then-else construct available 
// in JavaScript. 

function maxOfTwoNumbers (x ,y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

console.log(maxOfTwoNumbers(12, 5))


//---SEPARATOR----
console.log("------------------");

//2. Define a function maxOfThree that 
// takes three numbers as arguments and 
// returns the largest of them.

function maxOfThree(a, b, c) {
    var maximum;

    if (a > b && a > c) {
        maximum = a;
    } else if (b > a && b > c) {
        maximum = b;
    } else if (c > a && c > b) {
        maximum = c;
    }

    return maximum;
}

var calcSays = `The max of your numbers is: ${maxOfThree(2, 14, 6)}`;
console.log(calcSays);

//---SEPARATOR----
console.log("------------------");

// 3. Write a function isCharacterAVowel that 
//takes a character (i.e., a string of length 1) and 
//returns true if it is a vowel and false otherwise.

function isCharacterAVowel (char1) {
    var truthiness;

    if (char1.length === 1) {   //i know this reads ugly,  i'll work on it!!
        if (char1 === 'a' || char1 === 'i' || char1 === 'u' || char1 === 'e' || char1 === 'o') {
            return truthiness = "true";
        } else {
            return truthiness = "false";
        }
    } else {
        console.log("Please enter only one character");
    }
}

console.log(isCharacterAVowel('k'));

//---SEPARATOR----
console.log("------------------");

//4. Define a function sumArray and a function
//multiplyArray that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, 
//sumArray([1,2,3,4]) should return 10, and 
//multiplyArray([1,2,3,4]) should return 24.

var numbersArray = [1,2,3,4];

function sumArray(targetArray) {
    var accumulator = 0;
    for(var i = 0; i < targetArray.length; i++) {
        accumulator += targetArray[i];
    }
    return accumulator;
}

function multiplyArray(targetArray) {
    var productator = 1;
    for(var i = 0; i < targetArray.length; i++) {
        productator *= targetArray[i];
    }
    return productator;
}

console.log(`The sum of your array is: ${sumArray(numbersArray)}`);
console.log(`The product of your array is: ${multiplyArray(numbersArray)}`);

//---SEPARATOR----
console.log("------------------");

//5. Write a function that returns the number of
//arguments passed to the function when called.

var starterArray = [1,2,3,4];

function numberOfElements(targetArray) {
    var howManyElements = targetArray.length;
    return howManyElements;
}

console.log(`Your array has: ${numberOfElements(starterArray)} elements`);

//---SEPARATOR----
console.log("------------------");

//6. Define a function reverseString that reverses 
//a string. For example, reverseString("jag testar") 
//should return the string "ratset gaj".

var normalString = "jag testar";

function reverseString (stringOne) {
    var reversed = [];
    for (var i = stringOne.length-1 ; i > -1; i--) {
        reversed += stringOne[i];
    }

    return reversed;
}

console.log(`Your string reversed is: ${reverseString(normalString)}`);

//---SEPARATOR----
console.log("------------------");

//7. Write a function findLongestWord that 
//takes an array of words and returns the 
//length of the longest word in the array.

var wordArray = ["Sofia","Tofu","Cristian","Juliettita","Hannah"];

var currentLongest="";

function findLongestWord(stringArray) {
    for(var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > currentLongest.length) {
            currentLongest = stringArray[i];
        }
    }
    return currentLongest;
}

console.log(`The longest word in your array is ${findLongestWord(wordArray)}.`);

//---SEPARATOR----
console.log("------------------");

//8. Write a function filterLongWords that takes 
//an array of words and a number i and returns a 
//new array of words that are longer than i characters long.

var arrayOfWords = ["mango","salad","avocado","tiwa", "kiwi"];
var yetAnotherArrayOfWords = ["mangoteada","strawberry","guacamole","cucumber juice", "banana"];


function filterLongWords (someArray, someNum) {
    var theArrayOfTruth = [];

    for (var i = 0; i < someArray.length; i++) {
        if (someNum > someArray[i].length){
            theArrayOfTruth.push(yetAnotherArrayOfWords[i]);
        } else {
            theArrayOfTruth.push(someArray[i]);
        }
    }
    return theArrayOfTruth;
}

console.log(filterLongWords(arrayOfWords, 6));