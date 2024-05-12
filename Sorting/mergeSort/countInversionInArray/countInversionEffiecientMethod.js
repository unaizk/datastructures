// Efficient method of Count Inversion in Array

let arr = [2,5,8,11,3,6,9,13];

let low = 0;
let mid = Math.floor(arr.length/2)-1;
let high = arr.length-1

function merge(arr,low,mid,high){
    let left = [];
    let right = [];




    for(let i=low; i<=mid; i++){
        left.push(arr[i])
    };

    for(let j=mid+1; j<=high; j++){
        right.push(arr[j])
    };

    let i =0; 
    let j = 0;
    let k = low;
    let res = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            arr[k] = left[i];
            i++;
            k++
        }else{
            arr[k] = right[j];
            j++;
            k++
            res += (left.length-i)
        }
    }

    while(i<left.length){
        arr[k] = left[i];
        i++;
        k++
    }
    while(j<right.length){
        arr[k] = right[j];
        j++;
        k++
    }


    return res
}

console.log(merge(arr,low,mid,high));

//Time complexity = O(n)
// Space complexity = O(n)