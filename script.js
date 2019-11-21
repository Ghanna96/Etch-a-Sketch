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

function hoverClass(){ //adding effect class to the element
    this.classList.add("effect");
  return;
}

const clearGrid= function(){
   const div= document.querySelectorAll('.box');
   div.forEach((x)=>{
       x.classList.remove('effect');
   })
   return
}

const resizeGrid=function(){
     while (container.firstChild) {
        container.removeChild(container.firstChild);
    }    
    container.classList.remove('template');
    let x=prompt("How many squares do you want?");  
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
    



