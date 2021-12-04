// function varTime() {
//     for(var i=0; i<5; i++){
//         setTimeout(()=>console.log(i),1000)
//     }
// }
// varTime();

// function letTime() {
//     for(let i=0; i<5; i++){
//         setTimeout(()=>console.log(i),1000)
//     }
// }
// letTime();

// function functTime() {
//     for(var i=0; i<5; i++){
//         ((i)=> {
//             setTimeout(()=>console.log(i),1000)
//         })(i)
//     }
// }
// functTime();

function tryCatchTime() {
    for(var i=0; i<5;i++) {
        try {
            throw i
        }
        catch(i) {
            setTimeout(()=>console.log(i),1000*i)
        }
    }
}
tryCatchTime();