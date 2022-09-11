//3. Stacks

// Stacks are a data structure that store
// information in the form of a list.
//=> They allow only adding and removing elements
// under a LIFO pattern(last in, first out).

// => Stacks are useful when we need to make
// sure elements follow the LIFO pattern .
// ex:
//      * javaScript call stack.
//      * Managing funtion invocations in various
//         programming languages.
//      * The undo/redo functionality many
//          programs offer.

//=> There's more than one way to implement a stack,
// *but probably the simplest is using an array
// with its push and pop methods.
// * Another way is to implemnet it like a list

// we create a class for each node within the stack.

class Node {
  //Each node has two prperties, its value and
  // a pointer that indicates the node that follows.
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first
  //node, the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // The push methos received a value
  //and adds it to the "top" of the stack.
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // The pop methos eliminates the elemet at
  // the "top" of the stack and returns its value.
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first);
//    Node {
//     value: 'value3',
//     next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
//     }

console.log(stck.last); // Node { value: 'value1', next: null }
console.log(stck.size); // 3
stck.push("value4");
console.log(stck.pop()); // value4

// The big O of stack methods id the following:
//* Insertion - O(1)
//* Removal - O(1)
//* Searching - O(n)
//* Access - O(n)

// OR
// Linked List Implementation

var root;

class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isEmpty() {
  if (root == null) {
    return true;
  } else {
    return false;
  }
}

function push(data) {
  var newNode = new StackNode(data);

  if (root == null) {
    root = newNode;
  } else {
    var temp = root;
    root = newNode;
    newNode.next = temp;
  }
  console.log(data + " push to stack <br/>");
}

function pop() {
  var popped = Number.MIN_VALUE;
  if (root == null) {
    console.log("stack is emplty");
  } else {
    popped = root.data;
    root = root.next;
  }
  return popped;
}

function peek() {
  if (root == null) {
    console.log("Stack is empty");
    return Number.MIN_VALUE;
  } else {
    return root.data;
  }
}

// Driver code

push(10);
push(20);
push(30);
push(40);

console.log(pop() + " popped from stack<br/>");
console.log("The element is peek " + peek());

//
