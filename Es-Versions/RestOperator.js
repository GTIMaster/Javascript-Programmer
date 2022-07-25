// function sum(name, ...args) {
//     console.log(arguments);
//     console.log(`Hello ${name}`);
//     let sum = 0;
//     for(let i in args) {
//         sum += args[i];
//     }
//     console.log(sum + '<br>');
// }
// sum("yahoo baba", 20, 30, 40);
// sum("Ram Kuamr", 40, 60, 80);

function sum(name, course, ...args) {
    console.log(arguments);
    console.log(`Hello ${name} ${course}:`);
    let sum = 0;
    for(let i in args) {
        sum += args[i];
    }
    console.log(sum + "<br>");
}
console.log(sum("yahoo baba", "btech", 20, 30, 40));
console.log(sum("Ram Kumar", "BCA", 40, 60, 80));
