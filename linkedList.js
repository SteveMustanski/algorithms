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
    let count = 0;
    let current = this.head;

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

  // returns the first found key or null if not fount
  search(key) {
    let current = this.head;

    while (current != null) {
      // compare each element of the list 
      // with given element 
      if (current.data === key) {

        return current.data;
      } else {
        current = current.next;
      }

      // not found 
      return null;
    }
  }
  // insert element at the position index 
  // of the list 
  insertAt(element, index) {
    if (index > 0 && index > this.size)
      return false;
    else {
      // creates a new node 
      let node = new Node(element);
      let current, prev;

      current = this.head;

      // add the element to the first index if specified
      if (index == 0) {
        node.next = head;
        this.head = node;
      } else {
        current = this.head;
        let it = 0;

        // iterate over the list to find position
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }

        // adding an element 
        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }

}



// code to execute/test the code

let list = new LinkedList(); // creates a new linked list
console.log(list.isEmpty()); // returns true
list.add(10);
list.sizeOfList(); // returns 1
console.log(list.isEmpty());  // returns false since list is not empty
list.printList();
list.add(11);
list.sizeOfList(); //returns 2
list.printList();
console.log(list.search(10)); // returns the found data, in this case 10
console.log(list.search(12)); // returns null as 12 doesn't exist
list.insertAt(12, 1);
list.printList(); //returns 10, 12, 11