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

let pop_up = document.querySelectorAll('.gallery .row img');

pop_up.forEach(image  =>{
   image.onclick = () =>{
    document.querySelector('.pop-up').style.display = 'block';
    document.querySelector('.pop-up img').src = image.getAttribute('src');
    document.querySelector('.gallery .download-btn').style.display = 'block';
   }
});

let close_img = document.querySelector('.pop-up span');

close_img.addEventListener('click', function(){
    document.querySelector('.pop-up').style.display = 'none';
});

let alerta = document.querySelector('.gallery .download-btn');

alerta.addEventListener('click', function(){
    alert("Hola, gracias por visitar mi sitio web en una próxima actualización podrás descargar las imágenes \nAtt: Raymer Gabriel 😀");
});







