

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
const mobileMenuOpenBtns = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenus = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtns = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtns.length; i++) {
  (function (index) {
    const mobileMenuCloseFunc = function () {
      mobileMenus[index].classList.remove('active');
      overlay.classList.remove('active');
    };

    mobileMenuOpenBtns[index].addEventListener('click', function () {
      mobileMenus[index].classList.add('active');
      overlay.classList.add('active');
    });

    mobileMenuCloseBtns[index].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
  })(i);
}

//    accordion variables

const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {
  
  accordionBtn[i].addEventListener('click' , function () {
    
    const clickedBtn = this.nextElementSibling.classList.contains('active');
    
    for (let i = 0; i < accordion.length; i++) {
      
      if (clickedBtn) break;
      
      if (accordion[i].classList.contains('active')) {
      
        accordion[i].classList.remove('active');  
        accordionBtn[i].classList.remove('active');
        
      }
      
    }
    
    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');
    
  });
  
}



























