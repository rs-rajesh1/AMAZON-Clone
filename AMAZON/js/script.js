const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-pre');
const next_btn=document.querySelector('.control-next');

let n=0;
function changeSlider(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display="none"; 
    }
    imgs[n].style.display="block"; 
}
changeSlider();
prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;c
    }
    changeSlider();
}
)
next_btn.addEventListener('click',(e)=>{
    if(n< imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlider();
}
)