const openMenu=document.querySelector('.openMenu');
const closeMenu=document.querySelector('.closeMenu');
const navbar=document.querySelector('.navigation');
const social=document.querySelector('.social');

openMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    social.classList.toggle('show');
})

closeMenu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    social.classList.toggle('show');
})

window.addEventListener("scroll", function () {
    var header = document.querySelector(".sticky");
    header.classList.toggle("stick", window.scrollY >0);
 })