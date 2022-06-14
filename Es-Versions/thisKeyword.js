const person = {
  firstName: "John",
  lastName: "Doe",
  sayHello() {
    console.log(
      `Hello I am ${this.firstName} ${this.lastName} and I have a ${car.brand} ${car.model} car`
    );
  },
};

const car = {
  brand: "Tata",
  model: "safari",
  personSay() {
    console.log(
      `${this.brand} ${this.model} have owned by ${person.firstName} ${person.lastName}`
    );
  },
};

person.sayHello();
car.personSay();
