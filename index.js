const btn=document.getElementById("krishna");

// “e is the event object provided by the browser that contains contextual information about the event. clientX and clientY give the mouse position relative to the viewport, which is useful for proximity-based UI behavior.”

btn.addEventListener("mousemove",(e)=>{
    const rect=btn.getBoundingClientRect();

    const x= e.clientX-rect.left;
    const y= e.clientY-rect.top;

    const dist= Math.sqrt(Math.pow(x,2) +Math.pow(y,2));
    if(dist<100){
        run();
    }
});

function run(){
    const maxX= 1000-btn.offsetWidth;
    const maxY = 400 -btn.offsetHeight;

    const randX= Math.random()*maxX;
    const randY= Math.random()*maxY;

    btn.style.left = `${randX}px`;
    btn.style.top = `${randY}px`;
}