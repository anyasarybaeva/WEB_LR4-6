const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
const exit=document.getElementById("exit");
const start=document.getElementById("start")
const pause=document.getElementById("pause")
const text=document.getElementById("text")


let points=0;
text.textContent=points;
exit.addEventListener('click', () => window.open('index.html'));
start.addEventListener('click', () =>{
    cactus.classList.add("move")
    var startTime=Date.now();
    
});

document.addEventListener("keydown",function(event){
    if(event.key==" ")
    {
        jump();
    }
});
let isPoint = setInterval(function() {
    let cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    text.textContent=points++;
},1500)
function jump()
{
    if(dino.classList!="jump" && cactus.classList=="move")
    {
        dino.classList.add("jump")
      
    }
    setTimeout(function(){
        dino.classList.remove("jump")

    },300)
}
let isAlive = setInterval(function() {
    let dinotop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); 
    if(cactusleft<50 && cactusleft>0 && dinotop>=100)
    {
        alert("game over")
        points=0;
    }

    if(1495>=(Date.now()-startTime)>=1510 )
    {
        text.textContent=points++;
        start=Date.now()
    }
},15)





