// Naive method of Count Inversion in Array



let arr = [2,4,1,3];

function invCount(arr){
    let result = 0;

    for(let i=0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] > arr[j]){
                result++
            }
        }
    }
    return result
}

console.log(invCount(arr));