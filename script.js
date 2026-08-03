function updateClock(){
    const now=new Date();
    const h=String(now.getHours()).padStart(2,'0');
    const m=String(now.getMinutes()).padStart(2,'0');
    const s=String(now.getSeconds()).padStart(2,'0');
    document.getElementById("clock").innerHTML=`${h}:${m}:${s}`;
}
setInterval(updateClock,1000);
updateClock();

function toggleTutorial(){
    const menu=document.getElementById("tutorialMenu");
    if(menu.style.display==="block"){
        menu.style.display="none";
    }else{
        menu.style.display="block";
    }
}
