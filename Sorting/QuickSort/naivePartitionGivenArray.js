// Steps to partition a given array in Naive method 
                                                        // arr = [5,13,6,9,12,8,11];
                                                        // p = 5    arr[p] = 8
                                                    
// 1 : Swap arr[p] with the last element                1) arr = [5,13,6,9,12,11,8] 
// 2 : Create an Empty Array temp = []                  2) temp = []
// 3 : Traverse Through array and append all            3) temp = [5,6,8]
//     smaller and same elements to temp
// 4 : Traverse again and append all greater elements   4) temp = [5,6,8,13,9,12,11]
// 5 : Copy temp to arr                                 5) arr = [5,6,8,13,9,12,11]
                                                                //--- p  -----------


 let arr = [5,13,6,9,12,8,11]
 let p = 5                                                                
 function partition(arr,p){
    let n = arr.lengthl

    [arr[p],arr[n-1]] = [arr[n-1],arr[p]]; //Swap arr[p] with the last element

    let temp = []; //Create an Empty Array temp = []

    for(let i=0; i<n; i++){
        if(arr[i] <= arr[n-1]){  //Traverse Through array and append all smaller and same elements to temp
            temp.push(arr[i])
        }
    }

    for(let i=0; i<n; i++){
        if(arr[i] > arr[n-1]){  //Traverse again and append all greater elements
            temp.push(arr[i])
        }
    }

    for(let i=0; i<n; i++){
       arr[i] = temp[i]  //Copy temp to arr 
    }

 }                                                               








