// An object is a collection of related data
// and/or functionality
// These usually consist of several variables
// and functions

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi I am ${this.name[0]}`);
  },
};

person.name;
person.name[0];
person.age;
person.bio();
person.introduceSelf();

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}. `);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`hi i'm ${this.name}`);
  },
};

person1.introduceSelf();
person2.introduceSelf();

//
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}`);
  };
  return obj;
}

const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();

//

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`HI i'm ${this.name}`);
  };
}

const Jhon = new Person("Jhon");
Jhon.name;
Jhon.introduceSelf();
