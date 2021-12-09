const dino=document.getElementById("dino");
const cactus=document.getElementById("cactus");
const counter=document.getElementById("counter");
let points=0;
document.writeln("Очки:",points);
document.addEventListener("keydown",function(event){
    if(event.key==" ")
    {
        jump();
    }
    else if(event.key=="Backspace")
    {
        window.location.href = 'index.html';
    }
});
function jump()
{
    if(dino.classList!="jump")
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
    }
    else if(cactusleft<50 && cactusleft>0 && dinotop<100)
    {
        counter.textContent=points++;
    }
},15)     






