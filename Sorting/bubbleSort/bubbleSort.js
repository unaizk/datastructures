let arr = [10,8,20,5];


function bubbleSort(arr){
    for(let i =0 ; i<arr.length-1; i++){
        for(j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort(arr));

//Time complexity O(n2)