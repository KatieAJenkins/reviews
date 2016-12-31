'use strict';

//scope === variable access
//context === this

var a = 1; //parent or root scope. part of window object
console.log(a);

function foo() {
  var a = 2;//child scope
  console.log(a);
}

foo();
console.log(a);

//if we remove var a from function
var a = 1;
console.log(a);

function foo() {
  a = 2; //replaces var a = 1. has var a been created in scope? no --> then moves to global variable
  console.log(a);
}

foo();
console.log(a);
