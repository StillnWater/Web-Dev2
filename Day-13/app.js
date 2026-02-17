//promise creation

let mypromise=new Promise((res,rej)=>{
    let data="this is data";
    if(data){
        res(data);
    }else{
        rej("error");
    }
    res("promise resolved");
});
console.log(mypromise);

//promise handling
mypromise.then((data)=>{
    console.log(data);
},(error)=>{
    console.log(error);
});

mypromise
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})


