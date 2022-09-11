const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();

//
const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear());

myDate.getYear = function () {
  console.log("somthing else!");
};

myDate.getYear();

//

const personPrototype = {
  greet() {
    console.log("hello");
  },
};

personPrototype.greet();
const carl = Object.create(personPrototype);
carl.greet();

//

const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, PersonPrototype);

//
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const don = new Person("Don");
don.introduceSelf();

class Animal {
  sleep() {
    console.log("zzzzzzzzz");
  }
}

const spot = new Animal();
spot.sleep();

//
class Professor extends Person {
  teacher;

  construtor(name, teacher) {
    super(name);
    this.teacher = teacher;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teacher} professor.`
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);

    console.log(grade);
  }
}

const DonWest = new Professor("DonWest");
DonWest.introduceSelf();

DonWest.grade("My paper");

//

class Student extends Person {
  #year;
  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}

const summers = new Student("Summers", 2);

summers.introduceSelf();

summers.canStudyArchery();

summer.#year;

// 


