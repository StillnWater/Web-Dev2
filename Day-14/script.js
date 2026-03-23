async function getData(url){
    // fetch(url)
    // .then(resp=>resp.json())
    // .then(data=>console.log(data))
    let resp=await fetch(url);
    let data=await resp.json();
    return (data);
}
getData("https://jsonplaceholder.typicode.com/posts/1")
.then(data=>console.log(data));
