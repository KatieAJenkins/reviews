"use strict";

//use slice to make exact copy of array1 to array2

var array1 = [0, 1, 2];

var array2 = array1.slice(0); //num of positions to cutoff

console.log(array1);
console.log(array2);

//LOOPS
//loop through array to create new array for dogs

var animals = [
  { name: "Sake" , species: 'dog'},
  { name: "MrM" , species: 'cat'},
  { name: "Cinnamon" , species: 'horse'},
  { name: "Macy" , species: 'dog'},
  { name: "Wednesday" , species: 'cat'},
];

var dogs = []; //create an empty array to hold dogs
for(var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') //if object key pair value of species = dog, then...
    dogs.push(animals[i]); //push this object to a new array
}

console.log(dogs);

//access key value pairs in array with object
var animalsArray = ['cat' , 'horse' , 'dog', {name: 'MrM', species: 'cat'}];
console.log(animalsArray[3].species);

console.log("I am a " + animals[2].species + ' named ' + animals[2].name);
