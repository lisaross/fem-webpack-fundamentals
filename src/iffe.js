// https://www.youtube.com/watch?v=3cbiZV4H22c

(function() {
  console.log("This is an iffe function");
})();

// this function has no name and isn't stored in the variable
// the first ( makes the function an expression
// the last () tells js to run immediately

// IS A FUNCTION THAT IS RUN RIGHT AWAY

// can be named
(favNumber = function(num = 3) {
  // num is set to 3 as a default param (if nothing is passed in)
  console.log("My favourite number is " + num);
})();

// we can also call this with a new value
favNumber(5);

// most popular use of this is to avoid declaring variables in global scope and to create closures
// javascript has local scope

// let and const variables use block scope in es6

let b = 2;
{
  let b = 3;
  console.log(b);
}
console.log(b);
