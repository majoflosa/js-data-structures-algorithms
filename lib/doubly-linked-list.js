class DoublyLinkedList {
    // challenge: allow for constructor to take in array, and make each element in array a node on instantiation
    constructor(headValue) {
        this.head = this.createNode(headValue);
        this.tail = this.head;
    }

    createNode(value) {
        return { next: null, prev: null, value: value };
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

    // findNextNode(refNode) {}

    // findPreviousNode(refNode) {}

    insertAtBeginning(value) {
        const newHead = this.createNode(value);
        const oldHead = this.head;
        newHead.next = oldHead;
        oldHead.prev = newHead;
        this.head = newHead;

        return this;
    }

    insertAtEnd(value) {
        const newTail = this.createNode(value);
        const oldTail = this.tail;
        newTail.prev = oldTail;
        oldTail.next = newTail;
        this.tail = newTail;

        return this;
    }

    insertBefore(refNode, value) {}

    insertAfter(refNode, value) {}

    removeHead() {}

    removeTail() {}

    removeBefore() {}

    removeAfter() {}

    print() {}
}

const dll = new DoublyLinkedList('Bob');
