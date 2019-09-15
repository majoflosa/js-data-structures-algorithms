let tracker = 0;

const callMe = function() {
    tracker++;
    if ( tracker === 3 ) {
        return 'loops';
    }
    return callMe();
};

// callMe();

// = = = = = = = = =
// 1. Identify base case(s)
// 2. Identify recursive case(s)
// 3. Return where appropriate
// 4. Write procedures for each case that bring you closer to the base case
const callMyself = function() {
    // procedure that brings function closer to base case
    if ( baseCase ) {
        // base case
        return;        
    } else {
        // recursive case
        callMyself();
    }

    return;
};

// = = = = = = = = = = = =
const loopNTimes = function(n) {
    console.log('n equals ', n);
    if ( n <= 1 ) {
        return 'complete';
    }

    return loopNTimes(n-1);
};

console.log( loopNTimes(3) );

// = = = = = = = = = = = = = =
// Factorial (the silly way)
const factorial = function(n, acc) {
    acc = acc || n;
    if ( n === 1 ) return acc;

    acc *= (n-1);

    return factorial(n - 1, acc);
};

console.log( factorial(5) );

// Factorial (the smart way)
const factorialB = function(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorialB(n - 1);
};

console.log( 'factorialB: ', factorialB(5) );


// Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
    const reversedArr = [];
    const addItems = function(orderedArr){
        // if array is empty, return
        if(orderedArr.length > 0) {
            reversedArray.push(orderedArr.pop());
            addItems();
        }
        return;
    };

    addItems(arr);

    return reversedArr;
}

// Write a function 'recursiveMultiplier' that takes two arguments, 'arr' and 'num', and multiplies each arr value by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
    
}