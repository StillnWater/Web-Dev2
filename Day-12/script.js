// console.log("start.....")

// function myfunction(){
//         setTimeout(() => {
//             return ("hello world");

//         }, 5000);
// }
// console.log(myfunction());
// console.log("end....");

// console.log("start.....")

// function myfunction(cb){
//         setTimeout(() => {
//             // return ("hello world");
//             cb();
//         }, 5000);
// }
// myfunction((data)=>{
//     console.log(data)
// });
// console.log("end....");


console.log("start...")
function login(uname,password,cb){
    setTimeout(()=>{
        cb({uname:uname,isloggedin:true,message:"login succesfull"});

    },1000);

function getvideolist(email,cb){
    setTimeout(()=>{
        cb({Title:"video 1"},{Title:"video 2"});

    },1000);

}

function getvideodeatail(email,cb){
    setTimeout(()=>{
        cb({Title:video.title.description: "this is a video about" + video.title});

    },1000);

login("jondoe@gmail.com" ,"password" ,(userdata)=>{
    console.log(userdata);
    getvideolist(userdata.uname,(videolist)=>{
        console.log(videolist)
    })

});
