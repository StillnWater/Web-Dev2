const heading= document.getElementById("myheading");
console.log(heading);    

heading.style.color="blue";
heading.style.backgroundColor="yellow";

const para= document.getElementsByClassName("mypara");
para.style.backgroundColor="cyan"
console.log(para);

for(   let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan";
}

//queryselector
const qs= document.querySelector("#contentp");
console.log(qs);
qs.textContent="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";