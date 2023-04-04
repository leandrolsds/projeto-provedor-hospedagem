'use strict'
//=========================menu mobile=============================

const btnHamburguer = document.getElementById("btn__hamburguer");
function hamburguer(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');

    const link_menu =[...document.querySelectorAll(".link__menu")];
    link_menu.map((element) => {
        element.addEventListener("click", () => {
            nav.classList.remove("active")
        })
    })
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
btnHamburguer.addEventListener('click', hamburguer);
btnHamburguer.addEventListener('touchstart', hamburguer);
