// 2.Objects(Hash tables)
// An object is a collection of key-value pairs.
//This data structure is also called map, dictionary or hash-table.

//=> we use curly braces to declare the object.

//=> Then declare ech key followed by a colon,
//and the corresponding value.

const obj = {
  prop1: "I'm",
  prop2: "an",
  prop3: "object",
};
//=> Each key has to be unique within the object.

//=> Objects can store both values and functions.
//   When talking about objects, values are called
// properties, and functions are called methods.

const obj = {
  prop1: "Hello!",
  prop3: (function () {
    console.log(`${this.prop1} I\'m a property dude!`);
  })(),
};

//=> Objects are a good way to group together data