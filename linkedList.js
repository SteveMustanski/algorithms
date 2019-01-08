// create a class to model a single node of a linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // adds an element at the end of the list 
  add(element) {
    // creates a new node 
    var node = new Node(element);

    // store current node 
    var current;

    // if list is Empty add the 
    // element and make it head 
    if (this.head == null)
      this.head = node;
    else {
      current = this.head;

      // iterate to the end of the 
      // list 
      while (current.next) {
        current = current.next;
      }

      // add node 
      current.next = node;
    }
    this.size++;
  }

  // helper methods

  // prints the list items 
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + " ";
      curr = curr.next;
    }
    console.log(str);
  }

  // checks if the list is empty
  isEmpty() {
    return this.size == 0;
  }

  // returns the size of the list
  sizeOfList() {
    console.log(this.size);
  }

  // finds the index of element 
  indexOf(data) {
    var count = 0;
    var current = this.head;

    // iterae over the list 
    while (current != null) {
      // compare each element of the list 
      // with given element 
      if (current.element === element)
        return count;
      count++;
      current = current.next;
    }

    // not found 
    return -1;
  }
}
let list = new LinkedList();
console.log(list.isEmpty());
list.add(10);
list.sizeOfList();
console.log(list.isEmpty());
list.printList();
list.add(11);
list.sizeOfList();
list.printList();