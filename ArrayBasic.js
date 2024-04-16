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

console.log(largest1([5, 10, 8, 600, 30, 80])); 
console.log('-------------------------------');

