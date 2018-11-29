/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._length = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    if ( value === undefined ) throw new Error('Could not push value to stack because value is undefined');

    this._length++;
    this._storage[this._length] = value;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    const popped = this._storage[this._length];
    delete this._storage[this._length];
    this._length--;

    return popped;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._length ? this._storage[this._length] : undefined;
  }
}

const myStack = new Stack();
myStack.push('test');
myStack.push('a second value');
myStack.push({ test: 'this will be popped, but not returned' });
console.log(myStack);

console.log( myStack.pop() );
console.log(myStack);


