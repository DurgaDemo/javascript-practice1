// Remove Duplicate Values from Array

let arr=[1,3,2,4,6,5,2,4,1,]

let newarr=[...new Set(arr)]
 
console.log(newarr)

 

let arr="ACBDCEA"

let newarr=[...new Set(arr)]

console.log(newarr)

nb


// Reverse The String Using For Loop

let string="Durga"
let strlen=string.length

for(let i=strlen-1;i>=0;i--){
    console.log(string[i])
}



// Largest Number from array


var arr=[4,2,-10,100,6,200,8]

arr.sort((a,b)=>{
    return a-b
});
console.log(arr[arr.length-1]);