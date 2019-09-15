class Stack {
    constructor() {
        this.storage = {};
    }

    push(val) {
        
    }

    pop() {
        
    }

    size() {

    }
}

const myStack = new Stack();
myStack.push("A");
myStack.push("B");
myStack.push("C");

myStack.pop();

myStack.size();


//////
class Stack {
    constructor(capacity) {
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._count = 0; 
    }

    // O(1)
    push(val) {
        if (this._count < this._capacity) {
            this._storage[this.count++] = value;
            return this._count;
        }

        console.error('Maximum capacity reached; remove element before adding new one');
    }

    // O(1)
    pop() {
        const value = this._storage[--this._count];
        delete this._storage[this._count];
        if (this._count < 0) {
            this._count = 0;
        }
        return value;
    }

    // get last element without popping it
    peek() {
        return this._storage[this._count-1];
    }

    count() {
        return this._count;
    }
}


///////
class MinStack {
    constructor(capacity) {
        this._capacity = capacity;
        this._storage = {};
        this._count = 0;
        this._min = new Stack();
    }

    push(value) {
        if (this._count < this._capacity) {
            if (this._min.peek() < value) {
                this._min.push(this._min.peek());
            } else {
                this._min.push(value);
            }

            this._storage[this._count++] = value;
            
            return this._count;
        }
    }

    pop() {
        this._min.pop();
        const value = this._storage[--this._count];
        delete this._storage[this._count];
        if (this._count < 0) {
            this._count = 0;
        }

        return value;
    }

    peek() {
        return this._storage[this._count - 1];
    }

    count() {
        return this._count;
    }

    min() {
        return this._min.peek();
    }
}
