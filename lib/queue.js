class Queue {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }

    enqueue(value) {
        if (this.count() < this._capacity) {
            this._storage[this._tail++] = value;
            return this.count();
        }
        console.error('Max capacity reached; remove element before adding a new one');
    }

    dequeue() {
        const element = this._storage[this._head];
        delete this._storage[this._head];
        if (this._head < this._tail) {
            this._head++;
        }

        return element;
    }

    peek() {
        return this._storage[this._head];
    }

    count() {
        return this._tail - this._head;
    }

    contains(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === value) return true;
        }
        return false;
    }

    until(value) {
        for (let i = this._head; i < this._tail; i++) {
            if (this._storage[i] === value) return i - this._head + 1;
        }
        return null;
    }
}



///// Two-Stack (just a challenge, not really useful)
// import Stack
class Queue_TwoStacks {
    constructor() {
        this._stackIn = new Stack();
        this._stackOut = new Stack();
    }

    enqueue(val) {
        this._stackIn.push(val);
    }

    _transferStacks() {
        while (this._stackIn.count() > 0) {
            this._stackOut.push(this._stackIn.pop());
        }
    }

    dequeue() {
        if (this._stackOut.count == 0) this._transferStacks();
        return this._stackOut.pop();
    }

    count() {
        return this._stackIn.count() + this._stackOut.count();
    }
}