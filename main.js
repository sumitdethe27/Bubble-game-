

let box=document.querySelector(".panel-2")


function rand(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
function fill(){
    
    let clutter="";
for(let a=0;a<150;a++){
    let num=rand(-5,10);
    clutter+=`<div class="box"> ${num} </div>`;
    box.innerHTML=clutter;
}
}



fill();

function box_loop(){
    let content=document.querySelectorAll(".box");
    score=0;
    content.forEach((item)=>{
        item.addEventListener("click",()=>{
            score+= +item.textContent
            item.textContent=""
            score_card.textContent=score
            
        })
    });
    }

document.querySelector(".btn").addEventListener("click",()=>{
    fill();
    time=20;
    intervals=setInterval(ticker,1000);
    score_card.textContent="0";
box_loop();
})

let score_card=document.querySelector("#score");
let hi_score=document.querySelector("#high-score");

let score=0;
box_loop()
