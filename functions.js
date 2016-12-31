'use strict';

//higher order functions
//functions are values that can be assigned to variables and passed around

//normal function
function double(x) {
  return x * 2;
};

console.log(double(3));

//higher order function --> make into a variable
var double = function(x) {
  return x * 2;
};

console.log(double(9));

var waffle = double; //move function around
console.log(waffle(30));

//filter
//will loop through each item in the array
//will pass in each item to the call back function (animal)
//expects callback function to return true or false
//if true, put in new array. false, dump it
//when done will return new filtered array
var animals = [
  { name: "Sake" , species: 'dog'},
  { name: "MrM" , species: 'cat'},
  { name: "Cinnamon" , species: 'horse'},
  { name: "Macy" , species: 'dog'},
  { name: "Wednesday" , species: 'cat'},
];

var dogs = animals.filter(function (animal) {
  return animal.species === 'dog';
});

console.log(dogs);

//map --> applies a method on each item in array
var array = [1, 4, 9];
var roots = array.map(Math.sqrt);
// console.log(roots);

//reduce --> returns 1 thing
var array = [5, 2];

var reduced = array.reduce(sum);
  function sum (total , num) {
    console.log(total);
    console.log(num);
    return total + num;
  };

  console.log(reduced);
