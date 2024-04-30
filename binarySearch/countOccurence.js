let arr = [5,10,10,10,20,20];
let x = 10

function countOccurence(arr,x){
    let fi = indexOfFirstOccurence(arr,x);

    if(fi === -1){
        return 0
    }
    return (indexOfLastOccurence(arr,x) - fi +1)
}


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


console.log(countOccurence(arr,x));