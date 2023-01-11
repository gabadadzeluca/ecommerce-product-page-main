// menu pop up and close
const menuOpenBtn = document.querySelector('.menu-btn');
const popUpMenu = document.querySelector('.pop-up-menu');

menuOpenBtn.addEventListener('click', ()=>{
        popUpMenu.style.display = 'block';
});

const menuCloseBtn = document.querySelector('.menu-close-btn');
menuCloseBtn.addEventListener('click', ()=>{
    popUpMenu.style.display = 'none';
});