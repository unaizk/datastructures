let arr = [10,20,30,40,50,60];
let x = 60


function binarySearch(arr,x){
    let low = 0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === x){
            return mid
        }

        if(arr[mid] < x){
            low = mid+1;
            high = arr.length-1
        }else{
            low = 0;
            high = mid-1
        }
    }

    return -1
}

console.log(binarySearch(arr,x));