//object
let user={
    name:"rahul",
    address:"gurgaon",
    mobile:9876543210
    favcolor:["black","white","blue"]
    demo:function(){
    return "demo"
}
}
console.log(user.name,user.favcolor[2],user.demo());

//string literals 
console.log(`My name is ${user.name} and my address is ${user.address}`);

//Object methods
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//freeze
const car= {
    company:"BMW",
    model:"X5",
}
Object.freeze(car); //Freezes an object, preventing new properties from being added, 
// existing properties from being removed, and the values of existing properties from being changed.
Object.seal(car); //Seals an object, preventing new properties from being added and existing properties from being removed.