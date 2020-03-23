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

    findNextNode(refNode) {
        return refNode.next;
    }

    findPreviousNode(refNode) {
        return refNode.prev;
    }

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

    insertBefore(refNode, value) {
        const newNode = this.createNode(value);
        newNode.next = refNode;
        
        if (refNode.prev) {
            newNode.prev = refNode.prev;
            refNode.prev.next = newNode;
        }
        refNode.prev = newNode;

        if (refNode === this.head) this.head = newNode;
        console.log(this);
        return newNode;
    }

    insertAfter(refNode, value) {
        const newNode = this.createNode(value);
        newNode.prev = refNode;

        if (refNode.next) {
            newNode.next = refNode.next;
            refNode.next.prev = newNode;
        }

        refNode.next = newNode;

        if (refNode === this.tail) this.tail = newNode;

        return newNode;
    }

    removeHead() {
        const removed = this.head;
        delete this.head;
        if (removed.next) {
            this.head = removed.next;
            this.head.prev = null;
        }

        return removed;
    }

    removeTail() {
        const removed = this.tail;
        delete this.tail;

        if (removed.prev) {
            this.tail = removed.prev;
            this.tail.next = null;
        }

        return removed;
    }

    removeBefore(refNode) {
        if (!refNode.prev) return false;

        const removed = refNode.prev;
        delete refNode.prev;

        if (removed === this.head) {
            this.head = refNode;
            this.head.prev = null;

            return removed;
        }

        refNode.prev = removed.prev;
        removed.prev.next = refNode;

        return removed;
    }

    removeAfter(refNode) {
        if (!refNode.next) return false;

        const removed = refNode.next;
        delete refNode.next;

        if (removed === this.tail) {
            this.tail = refNode;
            this.tail.next = null;

            return removed;
        }

        refNode.next = removed.next;
        removed.next.prev = refNode;

        return removed;
    }

    print() {
        const result = [];
        this.forEach(node => result.push(node.value));

        return result;
    }
}
