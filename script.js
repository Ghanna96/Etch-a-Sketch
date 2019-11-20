const container=document.querySelector('#container');
const createDiv=function(){
    for(i=0;i<256;i++){
        let d=document.createElement('div');
        d.classList.add("box");
        container.appendChild(d);
    }
    return
}
function hoverClass(){
    this.classList.add("effect");
  return;
}
createDiv();
const div=document.querySelectorAll('.box');
div.forEach((d)=>{
    d.addEventListener('mouseover',hoverClass)
}
)