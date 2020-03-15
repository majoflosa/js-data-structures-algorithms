// Write a function that loops through the numbers n down to 0.
function loopToZero( num ) {
    console.log( 'current num: ', num );
    return num === 0 ? 0 : loopToZero(num - 1);
}

// Write a function that takes two arguments, base and expo, and recursively returns exponent value of the base
function exponent( base, expo ) {
    return expo === 0 ? 1 : base * exponent( base, expo - 1);
}

// write a function that takes two arguments, arr and num, and multiplies each arr value by num 
// and returns an array of the values.
function multiplier( arr, num ) {
    if ( arr.length === 0 ) {
        return arr;
    }

    const popped = arr.pop();
    
    multiplier( arr, num );

    arr.push( popped * num );
    return arr;
}


// write a function that takes an array and uses recursion to return its contents in reverse
function reverse( arr ) {
    if ( arr.length === 0 ) {
      return arr;
    }
  
    const popped = arr.pop();
    reverse( arr );
  
    arr.unshift( popped );
    return arr;
}


// reverse a string recursively
function reverseString( str ) {
    if ( str.length === 0 ) {
      return '';
    }
  
    return str[str.length - 1] + reverseString( str.substr(0, str.length - 1) );
}