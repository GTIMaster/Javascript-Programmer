// let user = ["yahoo baba", 25, "Delhi"];
// let [name, age, city] = user;
// console.log(name);
// console.log(age);
// console.log(city);

// let user = ["Yahoo baba", 22, "Delhi"];
// let [name, ...args] = user;
// console.log(name);
// console.log(args);

function user () {
    return ["Yahoo baba", 22, "Delhi"];
}

let [name, age, city] = user();
console.log(city);