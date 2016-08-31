/* * * * * * * * * * * * * * * * * * * * * *
 *    FOUNDATIONS PT 3: STRING METHODS     *
 * * * * * * * * * * * * * * * * * * * * * */

// Primitive values get methods too! Like the Array methods, these 
// are called on the string itself, for example: `"abc".slice(1, 2)`.
// For this exercise, the string will be the first argument.



/**  OBJECT.KEYS  **/
// But first a little warmup before the actual String methods!  
// This function takes an object and returns an array of it's keys.

// Example Usage:
// var obj = {a: 1, b: 2, c: 3};
// Object.keys(obj);    --> returns ['a', 'b', 'c']

var keys = function(object) {

};


/**  SLICE  **/
// This useful method works on strings and arrays. It copies a sub-section 
// based on a start index (inclusive) and an end index (non-inclusive). 

// Note that there are a lot of creative ways `slice` handles its parameters! 
// Both are optional, and you can even use negative indexes. Check out MDN 
// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice 
// if you are unfamiliar with how it should work. 

// Example Usage:
// var str = "hello world";
// str.slice(0, 5);     --> returns "hello"
// [1, 2, 3].slice(1);  --> returns [2, 3]

var slice = function(stringOrArray, start, end) {

};


/**  TRIM  **/
// A handy little method for processing text. Returns the input string 
// with all white space removed from the beginning and the end. 

// Example Usage:
// var str = "\n hi there     ";
// str.trim();    --> returns "hi there"

var trim = function(string) {

};


/**  REPLACE  **/
// Searches for a target sub-string and replaces it. Note that without 
// RegEx, only the first instance found will be replaced, and your version 
// is not expected to handle RegEx.

// Example Usage:
// "axc".replace("x", "b");    --> returns "abc"

var replace = function(string, target, replacement) {

};
