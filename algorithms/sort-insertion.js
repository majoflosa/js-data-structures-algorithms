function insertionSortOpt(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

function insertionSort( list ) {
	for ( let i = 1; i < list.length; i++ ) {
		let curr = list[i];
		let j = i - 1;

		while ( j >= 0 && list[j] > curr ) {
			list[j + 1] = list[j];
			j = j - 1;
		}
		list[j + 1] = curr;
	}

	return list;
}

insertionSort( [2, 3, 5, 4, 6, 1] );

// alt
function insertionSort2( list ) {
	for ( let i = 0; i < list.length; i++ ) {
		let curr = list[i];

		for ( let j = i - 1; j >= 0; j-- ) {
			if ( curr < list[j] ) {
				let tmp = list[j];
				list[j] = curr;
				list[j + 1] = tmp;
			} else {
				break;
			}
		}
	}

	return list;
}
