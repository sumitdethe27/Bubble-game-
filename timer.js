let time =5;
let timer=document.querySelector("#timer");
function gameover(){
    box.innerHTML="";
    box.innerHTML=`<div class="game-over" >Game Over</div>`;

}
function ticker(){
    console.log("agian")
        if(time==0){
            gameover();
            if( +score_card.textContent > + hi_score.textContent){
                hi_score.textContent=score_card.textContent

            }
            clearInterval(intervals);
        }else{
        
            time--;
            timer.textContent=time
        }
}
let intervals=setInterval(ticker,1000);


