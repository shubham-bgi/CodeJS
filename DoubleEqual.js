//double equal converts them to string
var a = [3,6,12,24];
var b = ["3,6,12,24"];
var c = "3,6,12,24";
var d = `"3","6","12","24"`;
console.log(a==b);//false
console.log(a.toString()==b);//true
console.log(a==c);//true
console.log(c==b);//true