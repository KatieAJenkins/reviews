'use strict'
// Define a function named sum that takes in one argument.
//    arr (array of numbers)
//
// Return the sum of all of the numbers in the array. For example, given
// [1, 2, 3, 4], then return 10. If the array is empty, return 0.

// var array = [1, 2, 3, 4];
//
// function sum (array) {
//   var sum = 0;
//   for ( var index = 0; index < array.length; index++){
//     console.log(array[index]);
//     sum += array[index];
//     // console.log(sum);
//   }
//   console.log(sum);
//   return sum;
// }
//
// sum(array);

// Define a function named product that takes in one argument.
//    arr (array of numbers)
//
// Return the product of all of the numbers in the array. For example, given
// // // [1, 2, 3, 4], then return 24. If the array is empty, return 1.
// var array = [1, 2, 3, 4];
//
// function product (array) {
//   var product = array[0];
//   console.log(product);
//   for (var index = 0; index < array.length; index++) {
//     product = product * array[index];
//     console.log(array[index]);
//     console.log(product);
//   }
//   return product;
// };
//
// product(array);

// Define a function named concatenate that takes in one argument.
//    arr (array of strings)
//
// Return the concatenation of all the strings in the array. For example, given
// ['hello', 'my', 'name', 'is', 'ken'], then return 'hellomynameisken'. If the
// array is empty, return ''.

//IN: array
//OUT: string
//
// var array = ['hello', 'my', 'name', 'is', 'ken'];
//
// function concatenate (array) {
//   return array.join([]);
// };
//
// concatenate(array);

// Define a function named repeat that takes in two arguments.
//     str (string)
//     times (number)
//
// Return a new string containing times copies of the input str. For example,
// given 'hi' and 4, then return 'hihihihi'.
//IN: string, number
//OUT: new string

// function repeat (string, number) {
//   return string.repeat(number);
// };
//
// repeat('wassup' , 3);

// Define a function named filterPassingGrades that takes in one argument.
//     grades (array of numbers)
//
// Return a new array with any grade less than 70 filtered out. For example,
// given [88, 67, 70, 92, 53], then return [88, 70, 92].

//IN: array of numbers
//OUT: new array of numbers

// var grades = [88, 67, 70, 92, 53];
//
// function filterPassingGrades (grades) {
//   //new array variable
//   var passingGrades = [];
//
//   //loop over array
//   for (var i = 0; i < grades.length; i++) {
//     //compare array[i] > 70
//     if(grades[i] >= 70) {
//       //if true, push to new array
//       passingGrades.push(grades[i]);
//     }
//   }
//   // console.log(passingGrades);
//   return passingGrades;
// }
//
// filterPassingGrades(grades);

// Define a function named replace that takes in three arguments.
//    arr (array of numbers)
//    from (number)
//    to (number)
//
// Return a new array of numbers where all from elements are replaced with to.
// For example, given [1, 3, 2, 1, 3], 1, and 4, then return [4, 3, 2, 4, 3].

//IN: Array, number, number
//OUTPUT: new array

// var array = [1, 3, 2, 1, 3];
//
// function replace (array , from , to) {
//   //var new array
//   var replacedArray = [];
//   //for loop
//   for (var i =0; i < array.length; i++) {
//     //compare each array[i] to see if it is from variable
//     if (array[i] === from) {
//       console.log(to);
//       console.log(from);
//       //if from === array[i], push to var to new array
//       replacedArray.push(to);
//     }
//     //if not, push from var to new array
//     else {
//       replacedArray.push(array[i]);
//     }
//   }
//   console.log(replacedArray);
// };
//
// replace ( array , 3 , 6);

// Define a function named flatten that takes in one argument.
//     arr (array of arrays)
//
// Return a new array that combines all of elements of each inner array. For
// example, given [[1], [2, 3], [4]], then return [1, 2, 3, 4].
//
// Tip: You only need to flatten one level deep.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

//IN: array
//OUT: new array

// var array = [[1], [2, 3], [4]];
//
// function flatten (array) {
//   //new array var
//   var flatArray = [];
//   //new array var = concat(array);
//   for ( var i = 0; i < array.length; i++) {
//     flatArray = flatArray.concat(array[i]);
//   }
//   console.log(flatArray);
// };
//
// flatten(array);

// Define a function named max that takes in one argument.
//    arr (array of numbers)
//
// Return the maximum number in the array. For example, given [1, 2, -3, 4],
// then return 4. If the array is empty, return -Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

//IN: array
//OUT: number

// var array = [1, 2, -3, 4];
//
// function max (array) {
//   //new variable max
//   //find max in array
//   var max = Math.max(...array);
//   //return max
//   console.log(max);
// }
//
// max(array);

// Define a function named min that takes in one argument.
//    arr (array of numbers)
//
// Return the minimum number in the array. For example, given [1, 2, -3, 4],
// then return -3. If the array is empty, return Infinity.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

//IN: array
//OUT: number

// var array = [1, 2, -3, 4];
//
// function min (array) {
// //min variable
// //find min array
// var min = Math.min(...array);
// console.log(min);
// };
//
// min(array);

// Define a function named mean that takes in one argument.
//    arr (array of numbers)
//
// Return the mean (i.e. average) of all of the numbers in the array. For
// example, given , then return 3. If the array is empty, return null.

//IN: array
//OUT: number (median)

var array = [1, 2, 3, 4];

function mean (array) {
  //new mean variable
  var mean = array[0];
  console.log(mean);
  //loop through humbers
  for (var i = 1; i < array.length; i++) {
    //add the numbers to mean
    mean += array[i];
    console.log(mean);
  }
  //divide mean by array.length
  console.log(mean = mean / array.length);
  //return mean
};

mean (array);

// Define a function named median that takes in one argument.
//    arr (array of numbers)
//
// Return the median of all of the numbers. For example, given [1, 2, 6], then
// return 2. Also, if given [1, 2, 6, 8], return 4. If the array is empty,
// return null.
//
// Tip: Use Google to learn more about calculating the median.
// Tip: The given array may not be sorted.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// Define a function named contains that takes in two arguments.
//     arr (array of strings)
//     str (string)
//
// Return true if that string exists in the array, otherwise false.




// Define a function named distance that takes in two arguments.
//    point1 (object)
//    point2 (object)
//
// Assume each point argument has the following format.
//    { x: NUMBER, y: NUMBER }
//
// Return the distance between the two points on a Cartesian coordinate system.
// For example, given { x: 3, y: 2 } and { x: 9, y: 7 }, then return
// approximately 7.810249675906654.
//
// Tip: Use Google to learn more about calculating the distance.


// Define a function named combine that takes in two arguments.
//    obj1 (object)
//    obj2 (object)
//
// Return a new object that has the key-value pairs of both objects. For
// example, given { a: 1 } and { b: 2 }, then return { a: 1, b: 2 }.
// If there's a key in more than one object,
// the latest object to have the key will determine the value. For example,
// given {c: 3} and {c: 4}, then return {c: 4}.



// Define a function called invert that takes in one argument.
//    obj (object)
//
// Return a new object where the keys and values of the argument are inverted.
// For example, given { a: 1, b: 2 }, then return { '1': 'a', '2': 'b' }.





// Define a function named values that takes in one argument.
//    obj (object)
//
// Return an array of the values of the object. For example, given
// { a: 1, b: 2, c: 3 }, then return [1, 2, 3].



// Define a function called toPairs that takes in one argument.
//    obj (object)
//
// Return a new array where each element is key-value pair array of the
// argument. For example, given { a: 1, b: 2 }, then return
// [['a', 1], ['b', 2]].




// Define a function called fromPairs that takes in one argument.
//    arr (array)
//
// Return a new object where each key-value pair is from an element in the
// argument. For example, given [['a', 1], ['b', 2]], then return
// { a: 1, b: 2 }.
