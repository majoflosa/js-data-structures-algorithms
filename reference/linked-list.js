/** Class representing a Linked List */

class LinkedList {

    constructor( value ) {
      this.head = {value: value, next: null};
      this.tail = this.head;
    }
    /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    */
    insert( value ) {
      const node = {value: value, next: null};
      // this.tail {value: 1, next: null}
      this.tail.next = node;
      // this.tail {value: 1, next: {value: value, next: null}}
      this.tail = node;
    }
    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */
    remove() {
  
    }
    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
  // {
  //   head: {value: 1, next: {value: 2, next: null}}
  //   tail: {value: 2, next: null}
  // }
    removeTail() {
    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    contains() {
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    isHead() {
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    isTail() {
    }
  }
  
  const myList = new LinkedList(1); // initiate?
  console.log(myList);
  
  // {
  //   head: {value: 1, next: null},
  //   tail: {value 1, next: null}
  // }
  
  myList.insert(2);
  
  // {
  //   head: { value: 1, next: {value: 2, next: null} },
  //   tail: { value 1, next: null }
  // }
  
  myList.insert(3);
  console.log( myList );
  
  // {
  //   head: { value: 1, next: {value: 2, next: {value: 3, next: null}} },
  //   tail: { value 1, next: null }
  // }