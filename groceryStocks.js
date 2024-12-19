class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.length > 0 ? this.items.pop() : null;
  }

  display() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push("Milk");
stack.push("Eggs");
stack.push("Bread");
stack.display();
stack.pop();
stack.display();