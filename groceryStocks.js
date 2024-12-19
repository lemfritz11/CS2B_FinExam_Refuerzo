class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop() if self.items else None

    def display(self):
        print(self.items)

stack = Stack()
stack.push("Milk")
stack.push("Eggs")
stack.push("Bread")
stack.display()
stack.pop()
stack.display()