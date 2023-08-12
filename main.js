let box=document.querySelector(".panel-2")

let score=0;
function rand(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
function fill(){
    let clutter="";
for(let a=0;a<150;a++){
    let num=rand(0,10);
    clutter+=`<div class="box"> ${num} </div>`;
    box.innerHTML=clutter;
}
}


let content=document.querySelectorAll(".box")
content.forEach((item)=>{
    item.addEventListener("click",()=>{
        score+= +item.textContent
        console.log(score)
    })
})
fill();
document.querySelector(".btn").addEventListener("click",fill)