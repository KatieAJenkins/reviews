'use strict';
//VARIABLES are hoisted to the top of their containing scope

var myvar = 'my value';//variable outside of function => global variable
console.log(myvar);

(function() {
  var myvar; //declaration - when variables are declared. good practice to place this hidden variable happening behind the scenes here! put declared variables at top of function
  console.log(myvar);//result = 'undefined' bc no value has been assigned yet (initialization)

  var myvar = 'local value';//initialization of myvar variable (assigns a value)
  console.log(myvar);//variable now has a value

})(); //self invoking function that runs automatically



//FUNCTION DECLARATIONS don't use var, are hoisted to top

var myvar = 'my value';//variable outside of function => global variable
console.log(myvar);

(function() {
  newFunction();  //call function before it's been created will print hello world
    function newFunction(){ //function declaration
      console.log("hello world");
  };

})(); //self invoking function that runs automatically


//FUNCTION EXPRESSIONS --> use var, name gets hoisted but not implementation

var myvar = 'my value';//variable outside of function => global variable
console.log(myvar);

(function() {
  newFunction();  //name gets hoisted to top but not implementation --> errors

    var newFunction = function() {//function expression
      console.log('hello world'); // errors on line 35
      console.log(newFunction); //errors on line 35
    };

})(); //self invoking function that runs automatically
