// Find Distinct element or Union of Two Unsorted Array


let a = [10,10,20];
let b = [20,30,10,40];

function unionSize(a,b){
    let s = new Set(a);

    for(let i=0; i<b.length; i++){
        s.add(b[i])
    }
    return s.size
}

console.log(unionSize(a,b));