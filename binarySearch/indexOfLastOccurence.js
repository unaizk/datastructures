// Find the index of last occurence in the array

let arr = [5,10,10,20,20];
let x = 10



function indexOfLastOccurence(arr,x){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === x){
            if(arr[mid + 1] !== x || mid === arr.length-1  ){
                return mid
            }else{
                low = mid+1
            }
        }else if(arr[mid] < x){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
}

console.log(indexOfLastOccurence(arr,x));