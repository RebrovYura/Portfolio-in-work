const light = document.querySelector('#light');
const header = document.querySelector('#header');
const moon = document.querySelector('#moon');

light.addEventListener('click', function(){
    header.classList.add('light-theme');
    header.classList.remove('dark-theme');
    light.classList.add('disabled');
    moon.classList.remove('disabled');
});

moon.addEventListener('click', function(){
    header.classList.remove('light-theme');
    header.classList.add('dark-theme');
    light.classList.remove('disabled');
    moon.classList.add('disabled');
})
