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

//CALLBACK FUNCTIONS

//use callback function to filter to find dogs
//filter will loop through each item in the array
//will pass in each item to the call back function (animal)
//expects callback function to return true or false to tell filter if item should be in new array
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
})

console.log(dogs);
