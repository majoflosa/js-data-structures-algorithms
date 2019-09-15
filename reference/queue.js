/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
    this._length = 0;
    this._head = null;
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    if (value === undefined) throw new Error('Could not add to queue because the value is undefined');

    this._storage[this._length] = value;
    this._length++;
    this._head = this._head === null ? 0 : this._head;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    const oldest = this._storage[this._head];
    delete this._storage[this._head];

    this._length--;
    this._head = this._length === 0 ? null : this._head + 1;

    return oldest;
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    return this._head ? this._storage[this._head] : null;
  }
}

const myQ = new Queue();
console.log( myQ );

myQ.enqueue('zero');
myQ.enqueue('one');
myQ.enqueue('two');
myQ.enqueue([1, 2, 3]);
console.log( myQ );

console.log( myQ.dequeue() );
console.log( myQ );

console.log( myQ.dequeue() );
console.log( myQ );

console.log( myQ.peek() );

