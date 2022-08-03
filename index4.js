
// Largest Number from array

// record=[10,30,45,60,95]

// max = -Infinity

// last=record.length-1

// for(i=0;i<=last;i++){
//     if(record[i]> max){
//         max=record[i]
//     }
// }
// console.log(max)



var arr=[4,2,-10,100,6,200,8]

arr.sort((a,b)=>{
    return a-b
});
console.log(arr[arr.length-1]);