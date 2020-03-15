function merge( left, right ) {
	let l = 0;
	let r = 0;
	const output = [];

	while ( output.length !== left.length + right.length ) {
		if (left[l] > right[r] || left[l] === undefined ) {
			output.push( right[r] );
			r++;
		} else {
			output.push( left[l] );
			l++;
		}
	}

	return output;
}

function mergeSort( list ) {
	if ( list.length < 2 ) return list;

	const middle = Math.floor( list.length/2 );
	const left = list.slice( 0, middle );
	const right = list.slice( middle );

	const sortedLeft = mergeSort( left );
	const sortedRight = mergeSort( right );

	return merge( sortedLeft, sortedRight );
}

mergeSort( [2, 5, 3, 9, 7, 1, 8, 4, 6] );
