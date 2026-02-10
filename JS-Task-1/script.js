//task-1
// const task = document.getElementById("profile");
// task.style.backgroundColor = "green";
// task.style.border = "2px solid black";
// task.style.padding = "10px";
// task.style.textAlign = "center";

//task-2
// const task = document.getElementsByClassName("demo");
// for (let i of task) {
//     i.style.color = "red";
//     i.style.fontSize = "200px";
// }

// console.log(task.length);


//task-3
// const task=document.querySelectorAll("#contentp");
// for(let i of task){
//     if(i%2===0){
//         i.style.backgroundColor="lightblue";
//     }
//     else{
//         i.style.backgroundColor="lightgreen";
//     }
// }
// console.log(task);

const content=document.getElementsById("content");
const task3=content.querySelectorAll("p");
for(let i=0;i<task3.length;i++){
    task3[i].style.fontSize="20px";
    task3[i].style.color="purple";
}
    
