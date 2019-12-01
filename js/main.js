//-------------------------------------------//
//-----------------NAV MENU------------------//
//-------------------------------------------//

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const logo= document.querySelector('.logo');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  logo.classList.toggle('logo-hidden');
  menu.classList.toggle('test');
  //menu.style.display='flex';
  isMenuOpen = !isMenuOpen;

//   if(logo.className==='logo-hidden'){
//     menu.style.display='flex';
//   }else{
//     menu.style.display='none';
//   }
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});


//-------------------------------------------//
//-------------------TEST--------------------//
//-------------------------------------------//

const hello= $('.bonjour');
const aside= $('.intro-text');

const test= $('.header-container,.menuicon,.intro-text-p,svg, .home-work,footer').not('.bonjour').css('display', 'none');



window.onload= function(){
    aside.css('margin', '0 auto');
    hello.css('margin', '1em auto').show();
    setTimeout(() => {
    test.fadeIn();
    }, 1500);

    
}