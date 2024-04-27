// search Index of first occurence in array in sorted array


let arr = [5,10,10,20,20];
let x = 20


function indexOfFirstOccurence(arr,x){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === x){
            if(mid === 0 || arr[mid-1] !== x){
                return mid
            }else{
                high = mid-1
            }
        }else if(arr[mid] > x){
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return -1
}

console.log(indexOfFirstOccurence(arr,x));