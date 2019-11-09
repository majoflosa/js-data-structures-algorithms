// constructor: takes node
    // new Node(value)
    // this.head set to value
    // this.tail set to value
// node constructor
    // this.value
    // this.next = null
// add to tail
    // create node from value
    // set tail's next to node
    // update the LL tail to new node
// remove node
    // 

class LinkedList {
    constructor(headValue) {
        this.head = this.createNode(headValue);
        this.tail = this.head;
    }

    createNode(value) {
        return { next: null, value: value };
    }

    insertAtBeginning(value) {
        const newHead = this.createNode(value);
        const oldHead = this.head;
        newHead.next = oldHead;
        this.head = newHead;

        return this.head;
    }

    insertAtEnd(value) {
        const newTail = this.createNode(value);
        this.tail.next = newTail;
        this.tail = newTail;

        return this.tail;
    }

    insertBefore() {

    }

    insertAfter() {

    }

    forEach(callback) {

    }
}

const myLinkedList = new LinkedList('first'); 

/*  
{ 
    head: {
        value: 'first', 
        next: null
    },
    tail: { 
        value: 'first', 
        next: null
    }
}
*/


// = = = = = = = = = = =
