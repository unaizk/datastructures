let arr = [5,90,50,1];

function selectionSOrt(arr){
    for(let i = 0; i<arr.length-1; i++){
        let minIndex = i;

        for(let j= i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
    }
    return arr
};

console.log(selectionSOrt(arr));

//time complexity O(n2)
// space complexity O(1)