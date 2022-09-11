//1.Arrays
// An array is a collection of items stored at
// contiguous memory locations.

// or

// An array is a data structure that contains
//a group of elements. Typically these elements
// are all of the same data type.

const arr = [1, 2, 3];

const indexOfTwo = arr.indexOf(2);
console.log(arr[indexOfTwo - 1]); // 1
console.log(arr[indexOfTwo + 1]); // 2

arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// or

//Any array that has other arrays within itself
// is called a multidimensional array.

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(arr)

//=> Array are useful when we have to store
// individual values and add/delete values from
// the end of the data structure.

//=> But when we need to add/ delete form any 
// part of it, there are other data structure 
// that perform more efficiently.

