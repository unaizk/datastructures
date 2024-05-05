// Bubble sort effieicent problem if the array is already sorted 
let arr = [5,10,20,30];


function bubbleSort(arr){
    for(let i =0 ; i<arr.length-1; i++){
        let swapped = false
        for(j=0; j<arr.length-1-i; j++){    
            if(arr[j]>arr[j+1]){
                
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped = true
            }
        }
        if(swapped === false ){
            break;
        }
    }
    return arr
}

console.log(bubbleSort(arr));

//Time complexity O(n2)