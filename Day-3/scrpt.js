let arr=[5,-7,12,-6,-13,15,2]
let positArr=[];
while (arr.length>0){
    let element=arr.pop();
    if (element>0){
        positArr.push(element);
    }
}
console.log(positArr)
