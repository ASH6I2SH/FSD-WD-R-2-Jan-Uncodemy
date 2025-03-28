const imgs= document.querySelectorAll('.header-slider ul img')
const prev_btn= document.querySelector('.control_prev')
const next_btn= document.querySelector('.control_next')
const scrollContainer= document.querySelectorAll('.products')

let n=0;

function changeSlide(){
    imgs.forEach(element => {
        element.style.display='none'
    });
    imgs[n].style.display= 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--;
    }
    else{
        n= imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click', (e)=>{
    if(n==imgs.length-1){
        n=0;
    }
    else{
       n++; 
    }
    changeSlide();
})

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft+= evt.deltaY;
    })
}