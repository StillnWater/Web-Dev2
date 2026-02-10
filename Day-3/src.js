let arr=[1,2,3,2,1]
let origArr=[]
let reverse=[]

for (let i=arr.length-1;i>=0;i--){
    reverse.push(arr[i]);
    origArr.push(arr[i]);
}
console.log("Original Array: "+origArr)
console.log("Reversed Array: "+reverse)
