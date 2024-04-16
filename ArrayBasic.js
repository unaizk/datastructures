// Find Largest element in array and return its index

function largest(arr){
    for(let i = 0; i < arr.length; i++) {
        let flag = true;
        for(let j = 0; j < arr.length; j++) {
            if(i !== j && arr[i] < arr[j]) {
                flag = false;
                break;
            }
        }
        if(flag === true) {
            return i;
        }
    }
    return -1;
}
console.log('Lragest Number Index Naive solution');
console.log(largest([5, 10, 8, 600, 30, 80])); 
console.log('-------------------------------');

// Efficient solution

function largest1(arr){
    let largest = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[largest]){
            largest = i
        }
    }
    return largest
    
}
console.log('Lragest Number Index Efficient solution');
console.log(largest1([5, 10, 8, 600, 30, 80])); 
console.log('-------------------------------');

// Check array is sorted in Naive way

function isSorted(arr){
    for(let i=0; i<arr.length; i++){
        for(let j =i+1; j<arr.length ; j++){
            if(arr[j]< arr[i]){
                return false
            }
        }
    }
    return true
}
console.log('Finding sorted or not Naive solution');
console.log(isSorted([7,20,30,10]));
console.log('-------------------------------');


// Efficient solution Check array is sorted

function isSorted1(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]< arr[i-1]){
            return false
        }
    }
    return true
    
}
console.log('Finding sorted or not Efficient solution');
console.log(isSorted1([7,20,30,10]));
console.log('-------------------------------');