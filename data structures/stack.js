/*
In this article, we would be implementing Stack Data Structure in Javascript. 
Stack is a very useful data structure and has a wide range of application. Stack is a linear data structure in which addition or removal 
of element follows a particular order i.e. LIFO(Last in First Out) AND FILO(First in Last Out).

*/


//stack class

class Stack {

	//Array is used to implement stack
	constructor() {

		this.items = []
	}

	//Functions to be implemented
	//push(item)
	//pop()
	//peek()
	//isEmpty()
	//printStack()

    //Push: adds an element at the top of the stack
	push(element) {
		//push element into the items
		this.items.push(element);
	}

	//Pop: Returns top most element in the stack
	//and removes it from the stack
	//return Underflow if stack is empty
	pop() {

		if(this.items.length == 0)
			return "Underflow";
		return this.items.pop();

	}
    
    //Peek : Return the topmost element without removing it from the stack.
	peek() {
		//return top most element from the stack
		//but doesnt delete it
		return this.items[this.items.length - 1]

	}

	//Helper methods :This are the three basic operation perform by an Stack lets declare some helper method which can be useful while working with stack
	//isEmpty : return true if the stack is empty
	isEmpty() {
		//return true i stack is empty
		return this.items.length == 0;


	}

    //printStack : //return a string in which all elements of the stack are concatenated
	printStack() {

		var str = "";
		for (var i = 0; i < this.items.length; i++)
			str += this.items[i] + " ";
		return str;

	}




}

var stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.isEmpty());





