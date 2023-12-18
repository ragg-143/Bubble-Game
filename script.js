var timer=60;
var score=0;
var randomHitValue;
function makeBubble(){
    var clutter = " ";
    for(var i=1;i<=175;i++){
        var rn=Math.floor(Math.random()*10);
        clutter+=`<div id="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML=clutter
}

makeBubble();

function getTime(){
    var time=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timer").textContent=timer;

    }
    else{
        clearInterval(time);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over`;
        
    }

}
,1000)
}

getTime();

function getHit(){
    randomHitValue = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=randomHitValue;
}

getHit();

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent=score;
}
function decreaseScore(){
    score-=5;
    document.querySelector("#score").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === randomHitValue){
        increaseScore();
        makeBubble();
        getHit();
    }
    else{
        decreaseScore();
        makeBubble();
        getHit();
    }
})