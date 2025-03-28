//task    k =[96.5,32.7,56,78,23,70]
// find addition of first two elements using loop

// let k =[96.5,32.7,56,78,23,70]
// let sum=0;
// for(let i=0; i<2; i++){
//    sum+=k[i];
// }
// console.log(sum);

// let k = [96.5, 32.7, 56, 78, 23, 70];
// function sum(noOfElems) {
//   let sum = 0;
//   for (let i = 0; i < noOfElems; i++) {
//     sum += k[i];
//   }
//   console.log(sum);
//   return sum;
// }
// sum(2);

let k = [96.5, 32.7, 56, 78, 23, 70];

function sum(noOfElems) {
  let summ = 0;
  for (let i = 0; i < noOfElems; i++) {
    summ = summ + k[i];
  }
  console.log(summ);
  return summ;
}

sum(noOfElems);


