function returnOdd(arr){
    //let oddArr=;
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]%2 != 0){
    //         oddArr.push(arr[i])
    //     }
    // }
    return arr.filter(item => item%2 != 0)
    //return oddArr;
}

console.log(returnOdd([12,45,41,16,33,18]));