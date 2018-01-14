'use strict';

var hamburguerButton= document.querySelector('.hamburguer-button');
var menuLateral= document.querySelector('.menu-lateral');

function showMenu() {
  menuLateral.classList.toggle('animation-menu');
  hamburguerButton.classList.toggle('close');
}

hamburguerButton.addEventListener('click', showMenu);
