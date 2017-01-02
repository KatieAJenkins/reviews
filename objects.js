'use strict';

//key value pairs. state = key
var capitals = {
  Colorado: 'Denver',
  Nebraska: 'Lincoln'
}

console.log("The capital of Colorado is " + capitals.Colorado); //dot notation
console.log("The capital of Nebraska is "  + capitals["Nebraska"]);//bracket

//iterate through Object FOR/IN loop
//for (variableName -->variable to store name of property in ourObject)
// for (var state in capitals) {
//   console.log("The capital of " + state + " is " + capitals.state);
// }

for (var key in capitals) { //loop once for each key value in object
  console.log('Key: ' + key + 'Value: ' + capitals[key]);
}

//can name key variable anything!
for (var state in capitals) {
  console.log('Key: ' + state + 'Value: ' + capitals[state]);
}
