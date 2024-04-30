// Find the Square root of a number 


// Naive method

function squareRoot(x){
    let i =1;

    while(i*i <= x){
        i++
    }
    return i-1
}

console.log(squareRoot(16));

// Time complexity = o(n)
// space complexity = o(1)


// effiecient method

function squareRootEffiecient(x){
    let low = 1;
    let high = x;
    let res = 1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(mid*mid === x){
            return mid
        }else if(mid*mid < x){
            low = mid+1
            res = mid
        }else{
            high = mid-1
        }

    }
    return res
}

console.log(squareRootEffiecient(15));

//time complexity = o(log n)