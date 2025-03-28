let a = [22,33,44,55,66,77,88]
for(x in a){
    //console.log(x)
}

for(x of a){
    //console.log(x)
}

console.log(a.forEach((value,index,array)=>{
   return value
}));

console.log(a.map((value,index,array)=>{
    return value
}));

a.filter((value,index,array)=>{
    if(value> 30){
        console.log(value)
    }
})

r = a.reduce((total,value,index,array)=>{
    return total+= value
})
console.log(r)