// a = 10;
// console.log(a)
// a = 20;
// console.log(a)
// //var,let,const
// var b = 25;
// console.log(b)
// var b = 30;
// console.log(b)
// let c = 35;
// console.log(c)
//     c = 40;
// console.log(c)
// const d= 45;
// console.log(d)

// console.log(d)
// let x = 10;
// console.log(x)
//  x = 20;
// console.log(x)
// x=[10,20,"30",40.60,true,50]

// console.log(x[4])
// y ={"name":35,"address":"Faridabad"}
// console.log(y["address"])
//  function printsomename(f,g){
//     var a = f;
//     var b = g;
//     var c= a-b;
//     //console.log(c)
//     // console.log('one')
//     // console.log('Two')
//     // console.log('three')
//     return c
// }

m = 21;
n = 41;
console.log(m, n);
// printsomename()
// printsomename()
// printsomename()

//In pass by value, while calling the function the copies of variables are passed to the parameters of function  
function passbyvalue(a, b) {
  temp = a;
  a = b;
  b = temp;

  console.log("values inside the function:", a, b);
}
passbyvalue(m, n);
console.log("values outside the function:", m, n);

function passbyreference(myobject) {
  console.log(myobject.name, myobject.address);
  temp = myobject.name;
  myobject.name = myobject.address;
  myobject.address = temp;
  console.log("values inside the function:", myobject.name, myobject.address);
}

let myobject = { name: 35, address: "Faridabad" };
passbyreference(myobject);
console.log("values outside the function: ", myobject.name, myobject.address);
