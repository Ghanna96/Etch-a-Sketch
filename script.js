//query selectors
const container=document.querySelector('#container');
const resetButton=document.querySelector('#reset');
const resizeButton=document.querySelector('#resize');

const defaultGrid=function(){ //creating starting grid
    
    for(i=0;i<256;i++){
        let d=document.createElement('div');
        d.classList.add("box");
        container.appendChild(d);
    }
    const div=document.querySelectorAll('.box');
    div.forEach((d)=>{
    d.addEventListener('mouseover',hoverClass)
}
);
    return;
}

defaultGrid();
//adding effect class to the element
function hoverClass(){ 
    this.style.background="#000";
  return;
}
//generate random color in hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const returnBlack = ()=>{
    const div=document.querySelectorAll('.box');
    div.forEach((d)=>{
        d.addEventListener('mouseover',()=>{
            d.style.background="#000";
        })
    })
}
//activate when pressing button random color
function randomColor(){
    const div=document.querySelectorAll('.box');
    div.forEach((d)=>{
        d.addEventListener('mouseover',(event)=>{
            d.style.background=getRandomColor();
        })
    });
    return
}
//activate when pressing button clear
const clearGrid= function(){
   const div= document.querySelectorAll('.box');
   div.forEach((x)=>{
       x.classList.remove('effect');
       x.style.background="#fff";
   })
   return
}
//activate when pressing button resize
const resizeGrid=function(){
     while (container.firstChild) {
        container.removeChild(container.firstChild);
    }    
    container.classList.remove('template');
    let x;
    while(x==null){
        x=prompt("Choose pixel number(max 128)"); 
        if(x>128 || x<=0){
            x=null;
            alert("Entered invalid number!");
        }
    }
    container.style.cssText= "grid-template: repeat("+x+",1fr)/repeat("+x+",1fr);";
    for(i=0;i<(x*x);i++){
        let d=document.createElement('div');
        d.classList.add("box");
        container.appendChild(d);
    }
    const div=document.querySelectorAll('.box');
    div.forEach((d)=>{
    d.addEventListener('mouseover',hoverClass)
}
);
    return
}
    



