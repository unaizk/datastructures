// Print N to 1 using recursion


function printN(n){
    if(n===0){
        return
    }

    console.log(n);
    
    return printN(n-1);
}

printN(5);
console.log('--------------------------------------');

// Print 1 to N using recursion

function Print1N(n){
    if(n<=0){
        return
    }

     Print1N(n-1);
    console.log(n);
}

Print1N(5)
console.log('--------------------------------------');



// Check palindrome or not using recursion

function isPalindrome(s,start,end){
    if(start>=end){
        return true
    }

    return (s[start] === s[end] && isPalindrome(s, start+1, end-1))
}

let string = 'malayalama'
console.log(isPalindrome(string,0,string.length-1));
console.log('--------------------------------------');


// Find sum of digit using recursion

function sumOfDigit(n){
    if(n<=0){
        return 0
    };

    let ld = n%10;
    n = Math.floor(n/10);
    return sumOfDigit(n) + ld
}

console.log(sumOfDigit(5456));

