// Find the Duplicates Value in two sorted array and print it

let a = [10,20,20,40,60];
let b = [2,10,20,20,20];

function intersection(a,b){
    let m = a.length;
    let n = b.length;
    let i = 0;
    let j = 0
    while(i < m && j < n){
        if( i>0 && a[i] === a[i-1]){
            i++;
        }else if( a[i] < b[j]){
            i++;
        }else if(a[i] > b[j]){
            j++
        }else if(a[i] === b[j]){
            console.log(a[i]);
            i++;
            j++
        }
    }
}
intersection(a,b)