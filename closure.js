var sum2 = sum2();

function sum2() {
    let a = 2;
    return function(b){// This function will form closure with a
        return a+b;
    }
}

console.log(sum2(15));