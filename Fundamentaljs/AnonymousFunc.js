// Anonymous functions

// An anonymous function is a function without
// a name.

(function () {
  //...
});

// => The 'Parantheses -> ()' makes the anonymous function an
// expression that returns a function object.

//1. To assign it to a variable.

let show = function () {
  console.log("Anonymous function");
};
show();

//2 Using anonymous functions as arguments.

setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution

(function() {
    console.log('IIFE');
})();

//or

(function () {
    console.log('Immediatley invoked function execution');
})();

// 4. Arrow functions
let show = () => console.log('Anonymous function');
console.log(show());

