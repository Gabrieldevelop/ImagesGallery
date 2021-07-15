let menu = document.querySelector('#menu');
let navbar = document.querySelector('nav');

menu.addEventListener('click' , function(){
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('nav-toggle');
}