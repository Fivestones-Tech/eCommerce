'use strict';

//modal variables
const modal = document.querySelector('[data-modal]')
const modaCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal0overlay]';)


//modal function
const modalCloseFun = function () { modal.classList.add('closed') }

//modal eventlister
modalCloseOverlay.addEventListener('click, modalCloseFunc');
moadalCloseBtn.addEventListener('click, modalCloseFunc');







