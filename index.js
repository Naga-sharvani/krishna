let mouseX=0,mouseY=0;
let currX=0, currY=0;

const btn=document.getElementById("krishna");
const cursor=document.getElementById("fake");

// “e is the event object provided by the browser that contains contextual information about the event. clientX and clientY give the mouse position relative to the viewport, which is useful for proximity-based UI behavior.”

btn.addEventListener("mousemove",(e)=>{
    const rect=btn.getBoundingClientRect();

    // const x= e.clientX-rect.left;
    // const y= e.clientY-rect.top;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dx = x - rect.width / 2;
    const dy = y - rect.height / 2;

    const dist= Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2));
    if(dist<50){
        run();
    }
});

function run(){
    const maxX= window.innerWidth-btn.offsetWidth;
    const maxY = window.innerHeight-btn.offsetHeight;

    const randX= Math.random()*maxX;
    const randY= Math.random()*maxY;

    btn.style.left = `${randX}px`;
    btn.style.top = `${randY}px`;
}

document.addEventListener("mousemove",(e)=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
})

function moving(){
    currX+=(-currX+mouseX)*0.1;
    currY+=(-currY+mouseY)*0.1;

    cursor.style.left=`${currX}px`;
    cursor.style.top=`${currY}px`;

    requestAnimationFrame(moving);
}

moving();