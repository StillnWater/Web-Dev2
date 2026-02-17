fetch("link")
.then((robj)=>{
    console.log(robj);
    robj.json().then((data)=>{
        console.log(data);
    });
});


fetch("link")
.then(robj=>robj.json();)

.then(data=>console.log(data);)

.catch(err =>{
    console.log(err);
});

