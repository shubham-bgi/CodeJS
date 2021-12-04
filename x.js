function a() {
    setTimeout(()=> {console.log('1')}, 1000);
    setTimeout(()=> {console.log('2')}, 2000);
    setTimeout(()=> {console.log('3')}, 3000);
}
a();
setTimeout(()=> {console.log('4')}, 1000);
setTimeout(()=> {console.log('5')}, 1000);