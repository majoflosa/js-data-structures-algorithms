function quickSort( list, i, pivotPos ) {
	if ( i === undefined ) i = 0;
	if ( pivotPos === undefined ) pivotPos = list.length - 1;

	const pivot = list[pivotPos];
	const initialPos = pivotPos;

	while ( i < pivotPos ) {
		if ( list[i] > pivot ) {
			const tmp = list[pivotPos - 1];
			list[pivotPos] = list[i];
			list[i] = tmp;
			list[pivotPos - 1] = pivot;

			pivotPos--;
		} else {
			i++;
		}
	}

	if (pivotPos > 1) quickSort( list, 0, pivotPos - 1 );
	if (pivotPos < initialPos - 1) quickSort( list, pivotPos + 1 );
	
	return list;
}
quickSort( [2, 9, 7, 5, 7, 1, 8, 3, 6] );
