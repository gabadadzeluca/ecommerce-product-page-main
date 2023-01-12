"use strict";

// add slider efect

const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');


// mobile slider
sliderFunc(slider, arrowLeft, arrowRight);

function sliderFunc(slider, arrowLeft, arrowRight){
    const sliderImgs = slider.querySelectorAll('img');

    let current = 1;
    let size = sliderImgs[0].clientWidth;
    

    // set the first image
    slider.style.transform = 'translateX(' + (-size) + 'px)';
    
    
    arrowRight.addEventListener('click', ()=>{
        if(current >= 5) return;
        slider.style.transition = 'transform 0.4s ease-in-out';
        current++;
        slider.style.transform = `translateX(${-size*current}px)`;
    });
    
    arrowLeft.addEventListener('click', ()=>{
        if(current <= 0) return;
        slider.style.transition = 'transform 0.4s ease-in-out';
        current--;
        slider.style.transform = `translateX(${-size * current}px)`;
    });
    
    slider.addEventListener('transitionend', () => {
        if (sliderImgs[current].id === 'first-clone') {
            current = 1;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(${-size * current}px)`;
        }
        if (sliderImgs[current].id === 'last-clone') {
            current = sliderImgs.length - 2;
            slider.style.transition = 'none';
            slider.style.transform = `translateX(${-size * current}px)`;
        }
      });
    
      window.onresize = function() {
        location.reload();
    };
    
}


const mainImg = document.querySelector('.main-img img');
const smallImgs = document.querySelectorAll('.small-imgs img');

smallImgs.forEach(img=>{
    img.addEventListener('click', displaySlider)
});

mainImg.addEventListener('click', displaySlider);
function displaySlider(){
    console.log(this.id);
    // display slider for desktop

}