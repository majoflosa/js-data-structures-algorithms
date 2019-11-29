class LinkedList {
    // challenge: allow for constructor to take in array, and make each element in array a node on instantiation
    constructor(headValue) {
        this.head = this.createNode(headValue);
        this.tail = this.head;
    }

    createNode(value) {
        return { next: null, value: value };
    }

    forEach(callback) {
        let current = this.head;
        while (current !== null) {
            callback(current);
            current = current.next;
        }
    }

    findNode(value) {
        let theNode = null;
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                theNode = current;
                break;
            }
            current = current.next;
        }

        return theNode;
    }

    // findNextNode(redNode) {}

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

    insertAfter(refNode, value) {
        const newNode = this.createNode(value);
        newNode.next = refNode.next;
        refNode.next = newNode;

        if (this.tail === refNode) this.tail = newNode;
        
        return newNode;
    }

    removeHead() {
        const removed = this.head;
        delete this.head;
        if (removed.next) {
            this.head = removed.next;
        }

        return removed;
    }

    removeTail() {
        const removed = this.tail;
        delete this.tail;

        let current = this.head;
        while (current !== null) {
            if (current.next === removed) {
                current.next = null;
                this.tail = current;
                break;
            } else if (current === removed) {
                // head is tail, removing the last node
                current = null;
                delete this.head;
            }
            current = current ? current.next : null;
        }

        return removed;
    }

    removeAfter(refNode) {
        if (refNode === this.tail) return false;

        const removed = refNode.next;
        let newNext = null;
        if (removed !== this.tail) {
            newNext = removed.next;
        } else {
            this.tail = refNode;
        }
        delete refNode.next;
        refNode.next = newNext;

        return removed;
    }

    print() {
        const result = [];
        this.forEach(node => result.push(node.value));
        
        return result;
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
