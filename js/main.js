// ! Change theme script

const sun = document.querySelector('.sun');
const header = document.querySelector('#header');
const moon = document.querySelector('.moon');

sun.addEventListener('click', function(){
    header.classList.add('light-theme');
    header.classList.remove('dark-theme');
    sun.classList.add('disabled');
    moon.classList.remove('disabled');
});

moon.addEventListener('click', function(){
    header.classList.remove('light-theme');
    header.classList.add('dark-theme');
    sun.classList.remove('disabled');
    moon.classList.add('disabled');
})

// ! ---------------------------------------------- 


// ! Burger menu script


const burger = document.querySelector('#burger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#menu');

burger.addEventListener('click', function(){

    if (header.classList.contains('open')){
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.add('disabled');
        
    } else {
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.remove('disabled');

    }
});

// ! ---------------------------------------------- 

