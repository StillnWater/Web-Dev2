// fetch("link")
// .then((robj)=>{
//     console.log(robj);
//     robj.json().then((data)=>{
//         console.log(data);
//     });
// });


// fetch("link")
// .then(robj=>robj.json();)

// .then(data=>console.log(data);)

// .catch(err =>{
//     console.log(err);
// });




console.log("start...");

function login(uname, password) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                uname: uname,
                isloggedin: true,
                message: "login successful"
            });
        }, 2000);
    });
}

function getVideoList(email) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { title: "video 1" },
                { title: "video 2" }
            ]);
        }, 1000);
    });
}

function getVideoDetail(video) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                title: video.title,
                description: "This is a video about " + video.title
            });
        }, 1000);
    });
}

// promise chaining
login("jondoe@gmail.com", "password")
    .then(userdata => {
        console.log("User:", userdata);
        return getVideoList(userdata.uname);
    })
    .then(videoList => {
        console.log("Video List:", videoList);
        return getVideoDetail(videoList[0]);
    })
    .then(videoDetail => {
        console.log("Video Detail:", videoDetail);
    })
    .catch(error => {
        console.log("Error:", error);
    });
