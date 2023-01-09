"use strict";

// add slider efect

const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

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
    slider.style.transform = 'translateX(' + (-size * current) + 'px)';
});


window.onresize = function() {
    location.reload();
};

slider.addEventListener('transitionend', () => {
    console.log(sliderImgs[current]);
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