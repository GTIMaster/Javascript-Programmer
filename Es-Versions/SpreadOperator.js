function sum(name, ...args) {
    console.log(arguments);
    console.log(`Hello ${name}:`);
    let sum = 0;
    for(let i in arguments) {
        sum += args[i];
    }
    console.log(sum);
}
var arr = [10, 20, 30, 40];
console.log(sum('Yahoo baba', ...arr));
