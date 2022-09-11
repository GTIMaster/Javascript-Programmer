var root;
class MyStack {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// The method push to push element into the stack */
function push(data) {
  var newNode = new MyStack(data);

  if (root == null) {
    root = newNode;
  } else {
    var temp = root;
    root = newNode;
    newNode.next = temp;
  }
  console.log(data);
}

function pop() {
  var popped = Number.MIN_VALUE;
  if (root == null) {
    console.log("stack is empty");
  } else {
    popped = root.data;
    root = root.next;
  }
  return popped;
}

function getMin() {
  if (root.Count == 0) {
    console.log("Stack is empty");
  } else {
    console.log(root.data);
  }
}

push(2);
push(3);
console.log(pop() + " : is popped");
push(1);
console.log(getMin() + ": is getMin");
