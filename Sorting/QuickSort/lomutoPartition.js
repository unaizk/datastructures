// Lomuto partition


let arr = [10,80,30,90,70];

let l =0;
let h = 4;

function lomutoPartition(arr,l,h){
    let pivot = arr[h];
    let i = l-1
    for(let j = 0; j<h; j++){
        if(arr[j]< pivot){
            i++;
            [arr[j],arr[i]] = [arr[i],arr[j]]
        }
    }

    [arr[i+1],pivot] = [pivot,arr[i+1]];
    return i+1
}