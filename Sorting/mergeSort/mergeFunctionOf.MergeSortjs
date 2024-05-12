// Merge function of merge sort in Javascript



let arr = [10,20,40,20,30];

let low = 0;
let mid = Math.floor(arr.length/2);
let high = arr.length-1

function merge(arr,low,mid,high){
    let left = [];
    let right = [];

    let n1 = mid - low + 1;
    let n2 = high - mid;


    for(let i=0; i<n1; i++){
        left.push(arr[low+i])
    };

    for(let j=0; j<n2; j++){
        right.push(arr[mid+j+1])
    };

    let i =0; 
    let j = 0;
    let k = low;

    while(i < n1 && j < n2){
        if(left[i] < right[j]){
            arr[k] = left[i];
            i++;
            k++
        }else{
            arr[k] = right[j];
            j++;
            k++
        }
    }

    while(i<n1){
        arr[k] = left[i];
        i++;
        k++
    }
    while(j<n2){
        arr[k] = right[j];
        j++;
        k++
    }


    return arr
}

console.log(merge(arr,low,mid,high));


//Time complexity = o(n)
//Space complexity = o(n)