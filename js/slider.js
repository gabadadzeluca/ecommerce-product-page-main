"use strict";

// add slider efect

// mobile slider
const sliderMobile = document.querySelector('#slider-mobile');
sliderFunc(sliderMobile);

// desktop slider
const sliderDesktop = document.getElementById('slider-desktop');
const sliderContainerDesktop = document.querySelector('.slider-container.desktop');
sliderFunc(sliderDesktop);

function sliderFunc(slider, current = 1){
    const sliderImgs = slider.querySelectorAll('img');
    const arrowLeft = slider.parentElement.querySelector('.arrow-left');
    const arrowRight = slider.parentElement.querySelector('.arrow-right');
    let size = sliderImgs[0].clientWidth;
    
    // set the first image & navigate to the clicked element
    if(current != 1){
        slider.style.transition = 'none';
    }
    slider.style.transform = 'translateX(' + (-size*current) + 'px)';
    // slider.style.transition = 'transform 0.2s ease-in-out';

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


// navigation for desktop slider
const sliderSmallImgs = document.querySelectorAll('.small-imgs-slider img');
sliderSmallImgs.forEach(img=>{
    img.addEventListener('click', changeSlide);
});

function changeSlide(){
    let num = (this.getAttribute('num')); // get n from id=img-n  
    sliderFunc(sliderDesktop, num); // jump to that slide
}

// display desktop images
const mainImg = document.querySelector('.main-img img');
const smallImgs = document.querySelectorAll('.small-imgs img');

smallImgs.forEach(img=>{
    img.addEventListener('click', displaySlider);
});

mainImg.addEventListener('click', displaySlider);

function displaySlider(){
    let num = this.getAttribute('num');
    // display slider for desktop
    sliderContainerDesktop.style.display = 'flex';
    sliderFunc(sliderDesktop, num);
}

// hide desktop slider after click
document.addEventListener('click', (e)=> {
    if (!sliderContainerDesktop.contains(e.target) && ! document.querySelector('.img-container').contains(e.target)
        || document.querySelector('.close-btn').contains(e.target)){

        sliderContainerDesktop.style.display = 'none';
        document.body.style.overflow = 'visible'; // enable scroll
        document.querySelector('.wrapper').style.filter = 'brightness(100%)';
        document.body.style.backgroundColor = 'white';
    }else{
        document.body.style.overflow = 'hidden'; // remove scroll
        document.querySelector('.wrapper').style.filter = 'brightness(50%)';
        document.body.style.backgroundColor = '#757873';
    }
});