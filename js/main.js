// ! Change theme script

const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const body = document.querySelector('.body');

sun.addEventListener('click', function () {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    sun.classList.add('disabled');
    moon.classList.remove('disabled');
});

moon.addEventListener('click', function () {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    sun.classList.remove('disabled');
    moon.classList.add('disabled');
})

// ! ---------------------------------------------- 


// ! Burger menu script

const burger = document.querySelector('#burger');
const header = document.querySelector('#header');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#menu');

burger.addEventListener('click', function () {

    if (header.classList.contains('open')) {
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        menu.classList.add('disabled');
        body.setAttribute('style', 'overflow: auto');

    } else {
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        menu.classList.remove('disabled');
        body.setAttribute('style', 'overflow: hidden');
    }

    [].forEach.call(menu, function (el) {
        el.addEventListener('click', function () {
            header.classList.remove('open');
            overlay.classList.remove('fade-in');
            overlay.classList.add('fade-out');
            menu.classList.add('disabled');
            body.setAttribute('style', 'overflow: auto');
        });
    });
});

// ! ---------------------------------------------- 


// ! Copy footer email

function copyText() {
    let email = document.createElement("textarea");
    document.body.appendChild(email);
    email.value = 'yurirebrov01@gmail.com';
    email.select();
    document.execCommand("copy");
    document.body.removeChild(email);

    document.getElementById("copyInner").innerText = "Copied :)";
    return false;
}

// ! ---------------------------------------------- 


// !

