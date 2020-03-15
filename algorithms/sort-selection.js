// loops through array, compares current to the rest, sets minimum; 
// if minimum is less than current, swap with current
function selectionSort( list ) {
	for ( let i = 0; i < list.length; i++ ) {
        // assume minimum value is at current position
		let min = i;

        // loop through items after current
		for ( let j = i + 1; j < list.length; j++ ) {
            // if current minimum is greater than compared value, 
            // set compared position as position of new minimum
			if ( list[min] > list[j] ) {
				min = j;
			}
		}

        // swap current value with value of new minimum
		if ( i !== min ) {
			let tmp = list[i];
			list[i] = list[min];
			list[min] = tmp;
		}
	}

	return list;
}