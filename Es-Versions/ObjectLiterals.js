// let n = "name";
// var obj = {
//     [n]: "Yahoo baba",
//     course:"Btech"
// };
// console.log(obj);

let n = "student";
const obj = {
  [n + "name"]: " Yahoo baba",
  course: "Btech",
  detail: function () {
    return `${this.studentname} is student of ${this.course}`;
  },
};
console.log(obj);
console.log(obj.detail());
