//  difference between var, let and const.

// var
var a = "hello this is 1st a inilialization";
a = "hello this 2nd a inilialization";
console.log(a); // hello this 2nd a inilialization
a = "hello this is 3rd a initialization"; // not show any error message

// let
let b = "hello this is 1st b initialization";
b = "hello this is 2nd b initialization";
console.log(b); // hello this is 2nd b initialization
b = "hello this is 3rd b initialization"; // not show any error message

//const
const c = "hello this is 1st c initialization";
console.log(c); // hello this is 1st c initialization
c = "hello this is 3rd c initialization"; // error show when re-inilialized ans also console result c.
