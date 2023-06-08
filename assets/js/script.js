'use strict';

//modal variables
const modal = document.querySelector('[data-modal]')
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');


//modal function
const modalCloseFunc = function () { modal.classList.add('closed')}

//modal eventlister
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);


//notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

//notification toast eventlistener
toastCloseBtn.addEventListener('click', function () {
    notificationToast.classList.add('closed');
});
 
 
 
 
 
 // Mobile menu variables
 const mobileMenuOpenBtn = document.querySelector('[data-mobile-menu-open-btn]');
 const mobileMenu = document.querySelectorAll('[data-mobile-menu]')
 const mobileMenuCloseBtn = document.querySelectorAll('[ data-mobile-menu-close-btn]');
 const overlay = document.querySelector('[data-overlay]');
 
 for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
     
     //mobile menu function
     const mobileMenuCloseFunc = function () {
         mobileMenu[i].classList.remove('active');
         overlay.classList.remove('active');
     }
     
     mobileMenuOpenBtn[i].addEventListener('click', function () {
         mobileMenu[i].classList.add('active');
         overlay.classList.add('active');
     });
     
     mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
     overlay.addEventListener('click', mobileMenuCloseFunc);
     
 }
 