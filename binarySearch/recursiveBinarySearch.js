let arr = [10,20,30,40,50,60];
let x = 20

function recursiveBinarySearch(arr,x,low,high){
    if(low>high){
        return -1
    }

    let mid = Math.floor((low+high)/2);

    if(arr[mid] === x){
        return mid
    };

    if(arr[mid] > x){
        return recursiveBinarySearch(arr,x,low,mid-1)
    }else{
        return recursiveBinarySearch(arr,x,mid+1,high)
    }
}

console.log(recursiveBinarySearch(arr,x,0,arr.length-1));