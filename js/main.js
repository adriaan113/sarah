//-------------------------------------------//
//-----------------VARIABLES-----------------//
//-------------------------------------------//

//---------SASS COLORS---------//

const lightGrey = '#F5F5F5';
const purple    = '#70609F';
const black     = '#000000';


//-------------------------------------------//
//-----------------FUNCTIONS-----------------//
//-------------------------------------------//

//CLOSE MENU ON CLICK
function closeOnClick(){
        nav.classList.toggle('nav--open');
        menu.classList.toggle('test');
        logo.classList.toggle('logo-hidden');
        //isMenuOpen = !isMenuOpen;
        //menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
        //menu.hidden = !isMenuOpen;    
}

 //CHANGE CONTENT IN .MAIN-CONTAINER
function changeContent(a,b,c,d){
  introText.style.display=a;
  introGallery.style.display=b;
  info.style.display=c;
  workGallery.style.display=d; 
}

 //STYLE HTML ELEMENTS 
function styleElements(color1, color2){
  mainContainer.style.backgroundColor= color1;
  footer.style.backgroundColor= color1;
  header.style.backgroundColor= color1;
  mainWrapper.style.backgroundColor= color1;
  menuIcon.style.fill= color2;
}


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
//---------ANIMATE BONJOUR ON LOAD-----------//
//-------------------------------------------//

//BONJOUR GETS ANIMATED WITH ANIMATE.CSS. THIS PART ONLY ANIMATES ALL THE OTHER ELEMENTS.

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



//--------------------------------------------------//
//-----HIDE AND SHOW CONTENT IN .MAIN-CONTAINER-----//
//--------------------------------------------------//

const introText= document.querySelector('.intro-text');
const mainContainer=document.querySelector('.main-container');
const introGallery=document.querySelector('.intro-gallery');
const info=document.querySelector('.info');
const ctaContainer=document.querySelector('.cta-container');
const footer=document.querySelector('footer');
const header=document.querySelector('.header-container');
const mainWrapper=document.querySelector('.main-wrapper');
const workGallery=document.querySelector('.work-gallery');

const navMenu= document.querySelector('.nav__menu');
const menuBtn= document.querySelectorAll('.nav__link');
const menuIcon=document.querySelector('.menuicon__circle');

info.style.display= 'none';
workGallery.style.display='none';


navMenu.addEventListener('click',(e)=>{
  
  //ABOUT
  if(e.target === menuBtn[2]){


    //CHANGE CONTENT IN .MAIN-CONTAINER
    changeContent('none', 'none', 'flex','none');


    //STYLE HTML ELEMENTS 
    styleElements(purple, lightGrey);

    closeOnClick();


  }else if(e.target === menuBtn[0]){

    changeContent('flex', 'flex','none','none');

    styleElements(lightGrey, purple);

    closeOnClick();

  }else if(e.target === menuBtn[1]){
    changeContent('none','none','none','flex');
    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.color=purple;
    ctaContainer.children[1].children[1].style.stroke=purple;//THIS DOES NOT WORK YET. ALSO NOT IN ABOUT SECTION
    styleElements(lightGrey, purple);
    closeOnClick();
  }

});