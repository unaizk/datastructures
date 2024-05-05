let arr = [50,20,10,5];


function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i];
        let j = i-1;

        while( j>=0 && arr[j]> key){
            arr[j+1] = arr[j];

            j--
        }
        [arr[j+1] = key]
    }
    return arr
}

console.log(insertionSort(arr));

// Time complexity O(n2);
// space complexity O(1);