// Optimized BubbleSort with noSwaps
function bubbleSortOpt(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
        noSwaps = true;
        for(var j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;         
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
  
function bubbleSort( list ) {
    for ( let i = 0; i < list.length; i++ ) {
        for ( let j = 0; j < list.length; j++ ) {
            if ( list[j + 1] !== undefined ) {
                if ( list[j] > list[j + 1] ) {
                    const big = list[j];
                    list[j] = list[j + 1];
                    list[j + 1] = big;
                }
            }
        }
    }
    
    return list;
}

// alternative
function bubble_Sort(a) {
    var swap;
    var n = a.length - 1;
    var x = a;

    do {
        swap = false;
        for (var i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
               var temp = x[i];
               x[i] = x[i + 1];
               x[i + 1] = temp;
               swap = true;
            }
        }
        n--;
    } while (swap);
    
    return x; 
}
