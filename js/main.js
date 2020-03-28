//-------------------------------------------//
//-----------------VARIABLES-----------------//
//-------------------------------------------//

//---------SASS COLORS---------//

const lightGrey = '#F5F5F5';
const purple    = '#70609F';
const black     = '#000000';


//---------ELEMENTS---------//

const introText= document.querySelector('.intro-text');
const mainContainer=document.querySelector('.main-container');
const introGallery=document.querySelector('.intro-gallery');
const info=document.querySelector('.info');

const ctaContainer=document.querySelector('.cta-container');
const ctaWork=document.querySelector('.cta-work');
const ctaAbout=document.querySelector('.cta-about');

const footer=document.querySelector('footer');
const header=document.querySelector('.header-container');
const mainWrapper=document.querySelector('.main-wrapper');
const workGallery=document.querySelector('.work-gallery');

const navMenu= document.querySelector('.nav__menu');
const menuBtn= document.querySelectorAll('.nav__link');
const menuIcon=document.querySelector('.menuicon__circle');

const sticky=document.querySelector('.is-sticky');

const projectContainer= document.querySelector('.project');
const projectBtn= document.querySelector('.show-more-btn');
const showMore= document.querySelector('.show-more');

const projectTitle= document.querySelector('.project-info--title');
const projectText= document.querySelector('.project-info--text');
const projectImage= document.querySelector('.project-image');

const heroImg= document.querySelector('.hero');

//CISY
const client=document.querySelector('.client');
const industry=document.querySelector('.industry');
const services=document.querySelector('.services');
const year=document.querySelector('.year');

const arrowNext=document.querySelector('.arrow-next');
const arrowPrev=document.querySelector('.arrow-prev');

const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
const logo= document.querySelector('.logo');
let isMenuOpen = false;


//-------------------------------------------//
//-----------------FUNCTIONS-----------------//
//-------------------------------------------//

//CHECK FOR CTA BUTTONS TO ACCIDENTALLY SHOW AT MQ810. 
// function testTestTest(){
  
//     if(info.style.display==='none'){
//       //ctaContainer.style.display='none';
//       console.log('satan satan satan');
//     }else{
//       console.log('aahahahaha');
//     }
// }

// testTestTest();


//CLOSE MENU ON CLICK
function closeOnClick(){
  nav.classList.toggle('nav--open');
  menu.classList.toggle('test');
  logo.classList.toggle('logo-hidden');  
}

 //CHANGE CONTENT IN .MAIN-CONTAINER
function changeContent(a,b,c,d,e){
  introText.style.display=a;
  introGallery.style.display=b;
  info.style.display=c;
  workGallery.style.display=d; 
  projectContainer.style.display=e;
}

 //STYLE HTML ELEMENTS 
function styleElements(color1, color2){
  mainContainer.style.backgroundColor= color1;
  footer.style.backgroundColor= color1;
  header.style.backgroundColor= color1;
  mainWrapper.style.backgroundColor= color1;
  menuIcon.style.fill= color2;
}

//REFRESH THE PROJECT ITEMS SO THERE'S JUST ONE PROJECT ON DISPLAY AT A TIME
function cleanItems(){
  while( projectImage.firstChild ){
    projectImage.removeChild( projectImage.firstChild );
  }
}

//HOVER INTRO TEXT ON INTROGALLERY AND WORKGALLERY AT MQ810
function hoverChange(x){
  for(let i=0;i<x.children.length;i++){ 
    x.children[i].children[2].textContent= workData[i].intro; 
  }
}

//LOOP THROUGH THE PROJECTS WITH THE ARROWS AND THE TEXT LINKS
function nextProject(i){

  projectTitle.textContent= workData[i + 1].title;
  projectText.textContent= workData[i + 1].intro;
  showMore.textContent= workData[i + 1].extraInfo;

  client.children[1].textContent= workData[i + 1].client;
  industry.children[1].textContent= workData[i + 1].industry;
  services.children[1].textContent= workData[i + 1].services;
  year.children[1].textContent= workData[i + 1].year;
  heroImg.children[0].src=workData[i + 1].hero;

  for(let j=0;j<workData[i + 1].img.length;j++){

  const projectImageItems= document.createElement('li');
  projectImageItems.classList.add('project-image--item');

  const img= document.createElement('img');
  img.classList.add('project-image--item--content');
  img.src=workData[i + 1].img[j];  
  projectImageItems.appendChild(img);
  projectImage.appendChild(projectImageItems);
}
}

//LAST PROJECT TO THE FIRST
function lastToFirstProject(){

projectTitle.textContent= workData[0].title;
projectText.textContent= workData[0].intro;
showMore.textContent= workData[0].extraInfo;

client.children[1].textContent= workData[0].client;
industry.children[1].textContent= workData[0].industry;
services.children[1].textContent= workData[0].services;
year.children[1].textContent= workData[0].year;
heroImg.children[0].src=workData[0].hero;

for(let j=0;j<workData[0].img.length;j++){
const projectImageItems= document.createElement('li');
projectImageItems.classList.add('project-image--item');

const img= document.createElement('img');
img.classList.add('project-image--item--content');
img.src=workData[0].img[j];  
projectImageItems.appendChild(img);
projectImage.appendChild(projectImageItems);
}
}

//LOOP THROUGH THE PROJECTS WITH THE ARROWS AND THE TEXT LINKS
function prevProject(i){

  projectTitle.textContent= workData[i - 1].title;
  projectText.textContent= workData[i - 1].intro;
  showMore.textContent= workData[i - 1].extraInfo;

  client.children[1].textContent= workData[i - 1].client;
  industry.children[1].textContent= workData[i - 1].industry;
  services.children[1].textContent= workData[i - 1].services;
  year.children[1].textContent= workData[i - 1].year;
  heroImg.children[0].src=workData[i - 1].hero;

  for(let j=0;j<workData[i - 1].img.length;j++){

    const projectImageItems= document.createElement('li');
    projectImageItems.classList.add('project-image--item');

    const img= document.createElement('img');
    img.classList.add('project-image--item--content');
    img.src=workData[i - 1].img[j];  
    projectImageItems.appendChild(img);
    projectImage.appendChild(projectImageItems);
  }
}

//FIRST PROJECT TO THE LAST
function firstToLastProject(){

  projectTitle.textContent= workData[10].title;
  projectText.textContent= workData[10].intro;
  showMore.textContent= workData[10].extraInfo;

  client.children[1].textContent= workData[10].client;
  industry.children[1].textContent= workData[10].industry;
  services.children[1].textContent= workData[10].services;
  year.children[1].textContent= workData[10].year;
  heroImg.children[0].src=workData[10].hero;

  for(let j=0;j<workData[10].img.length;j++){
    const projectImageItems= document.createElement('li');
    projectImageItems.classList.add('project-image--item');

    const img= document.createElement('img');
    img.classList.add('project-image--item--content');
    img.src=workData[10].img[j];  
    projectImageItems.appendChild(img);
    projectImage.appendChild(projectImageItems);
  }
}

//FUNCTIONS TO SHOW THE NAMES OF THE PROJECTS BUT I DID NOT YET USE THEM AND INSTEAD JUST WENT FOR NEXT PROJECT AND PREVIOUS PROJECT
// function nextItem(x){
//   x = x + 1; 
//   x = x % workData.length; // if we've gone too high, start from `0` again
//   return workData[x].title; 
// }

// function prevItem(x) {
//   if (x === 0) { // i would become 0
//       x = workData.length; // so put it at the other end of the array
//   }
//   x = x - 1; // decrease by one
//   return workData[x].title; // give us back the item of where we are now
// }


//STARTING POINT OF WHAT YOU SEE FIRST

info.style.display= 'none';
workGallery.style.display='none';
projectContainer.style.display='none';


//-------------------------------------------//
//-----------------NAV MENU------------------//
//-------------------------------------------//


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  logo.classList.toggle('logo-hidden');
  menu.classList.toggle('test');
  isMenuOpen = !isMenuOpen;

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

navMenu.addEventListener('click',(e)=>{

  ctaContainer.children[0].style.display='flex';
  ctaContainer.children[1].style.display='flex';
  
  //ABOUT
  if(e.target === menuBtn[2]){

    //CHANGE CONTENT IN .MAIN-CONTAINER
    changeContent('none', 'none', 'flex','none','none');

    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.display='none';

    //STYLE HTML ELEMENTS 
    styleElements(purple, lightGrey);
    closeOnClick();

  }else if(e.target === menuBtn[0]){

    changeContent('flex', 'flex','none','none','none');

    styleElements(lightGrey, purple);
    ctaContainer.children[0].style.display='flex';
    ctaContainer.children[1].style.display='flex';
    closeOnClick();

  }else if(e.target === menuBtn[1]){
    changeContent('none','none','none','flex','none');
    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.color=purple;
   
    styleElements(lightGrey, purple);
    closeOnClick();
  }
});


ctaWork.addEventListener('click',(e)=>{

  if(ctaWork.children[0].textContent==='view more projects'){
    changeContent('none','none','none','flex','none');
    styleElements(lightGrey, purple);
    ctaContainer.style.display='flex';
    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.color=purple;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }else if(ctaWork.children[0].textContent=== 'next project'){
      for(let i=0;i<workData.length;i++){
        if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[10].title){
          cleanItems();
          lastToFirstProject();
        }else if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[i].title){
          cleanItems();
          nextProject(i);
          break;   
      }
    }
  }
})

ctaAbout.addEventListener('click',(e)=>{
  if(ctaAbout.children[0].textContent==='about me'){
    changeContent('none', 'none', 'flex','none','none');
    styleElements(purple, lightGrey);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //HIDES CTA BUTTONS IN THE ABOUT PAGE
    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.display='none';
    
  }else if(ctaAbout.children[0].textContent=== 'previous project'){
    for(let i=0;i<workData.length;i++){
      if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[0].title){
        cleanItems();
        firstToLastProject();
      }else if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[i].title){
        cleanItems();
        prevProject(i);
        break;  
      }
    }
  }   
})



//-------------------------------------------//
//---------ANIMATE BONJOUR ON LOAD-----------//
//-------------------------------------------//

//BONJOUR ON LOAD AT 810PX
//BONJOUR GETS ANIMATED WITH ANIMATE.CSS. THIS PART ONLY ANIMATES ALL THE OTHER ELEMENTS.

const hello= $('.bonjour');
const bon= $('.bon');
const jour= $('.jour');
const aside= $('.intro-text');

const restOfContent= $('.header-container,.menuicon,.intro-text-p,svg, .home-work,footer').not('.bonjour').css('display', 'none');
const mq810 = window.matchMedia("(min-width: 810px)");

function listenForMq(mq) {
  if (mq.matches){ 
    document.body.style.backgroundColor= purple;
    ctaContainer.style.display='none';
    introGallery.style.display='none';
     
    window.onload= function(){
      
      aside.css('margin', '-4rem auto');
      bon.addClass('animated').addClass('bounceIn');
      bon.css({
        'font-size':'15rem',
        'display':'block',
        'margin':'0 auto'
      });
      bon.show();
      jour.addClass('animated').addClass('fadeInRight');
      jour.css({
        'font-size':'15rem',
        'display':'block',
        'margin':'0 auto'
      });
      jour.show();

      setTimeout(() => {
      restOfContent.fadeIn();
      document.body.style.backgroundColor= lightGrey;
      introGallery.style.display='flex';
      ctaContainer.style.display='flex';
      aside.css('margin', '0 auto');
      bon.css({
        'font-size':'4.5rem',
        'display':'inline',
        'color': purple,
      })
      jour.css({
        'font-size':'4.5rem',
        'display':'inline',
        'color': purple,
      })
    }, 2000);  
    } 

  }else{

    document.body.style.backgroundColor= lightGrey;

    window.onload= function(){
      aside.css('margin', '0 auto');
      hello.addClass('animated').addClass('bounceInLeft');
      hello.show();
      setTimeout(() => {
      restOfContent.fadeIn();
      }, 1500);  
  }
  }
}

listenForMq(mq810);
mq810.addListener(listenForMq);



//--------------------------------------------------//
//-----HIDE AND SHOW CONTENT IN .MAIN-CONTAINER-----//
//--------------------------------------------------//

logo.addEventListener('click',()=>{
  changeContent('flex','flex','none','none','none');
  styleElements(lightGrey, purple);
  ctaContainer.children[0].style.display='flex';
  ctaContainer.children[1].style.display='flex';
});

//--------------------------------------------------//
//----HIDE AND SHOW MORE INFO WITH PROJECT BUTTON---//
//--------------------------------------------------//

projectBtn.addEventListener('click',()=>{

  if(showMore.style.display==='none'){
    showMore.style.display= 'flex';
    projectBtn.innerHTML='show less';
  }else{
    showMore.style.display= 'none';
    projectBtn.innerHTML='show more';
  }
})

//--------------------------------------------------//
//-------GENERATE TITLES AND TEXT AND IMAGES--------//
//--------------------------------------------------//

workGallery.addEventListener('click',(e)=>{
  cleanItems();
  for(let i=0;i<workGallery.children.length;i++){
    if(e.target.parentNode.children[1] === workGallery.children[i].children[1]){
      changeContent('none','none','none','none','flex');
      projectTitle.textContent= workData[i].title;
      projectText.textContent= workData[i].intro;
      showMore.textContent= workData[i].extraInfo;

      client.children[1].textContent= workData[i].client;
      industry.children[1].textContent= workData[i].industry;
      services.children[1].textContent= workData[i].services;
      year.children[1].textContent= workData[i].year;
      
      //ATTACH IMAGES TO THE SELECTED PROJECT
      for(let j=0;j<workData[i].img.length;j++){
        const projectImageItems= document.createElement('li');
        projectImageItems.classList.add('project-image--item');
 
        const img= document.createElement('img');
        img.classList.add('project-image--item--content');
        img.src=workData[i].img[j];
        projectImageItems.appendChild(img);
        projectImage.appendChild(projectImageItems);
      }

      ctaContainer.children[0].style.display='flex';
      ctaWork.children[0].style.color= black;
      ctaWork.children[0].textContent= 'next project';
      ctaContainer.children[1].style.display='flex';
      ctaAbout.children[0].style.color= black;
      ctaAbout.children[0].textContent= 'previous project';
      heroImg.children[0].src=workData[i].hero; 
    }
  }
})


introGallery.addEventListener('click',(e)=>{
  cleanItems();
  for(let i=0;i<introGallery.children.length;i++){
    if(e.target.parentNode.children[1] === introGallery.children[i].children[1]){
      changeContent('none','none','none','none','flex');
      projectTitle.textContent= workData[i].title;
      projectText.textContent= workData[i].intro;
      showMore.textContent= workData[i].extraInfo;

      client.children[1].textContent= workData[i].client;
      industry.children[1].textContent= workData[i].industry;
      services.children[1].textContent= workData[i].services;
      year.children[1].textContent= workData[i].year;

      for(let j=0;j<workData[i].img.length;j++){

        const projectImageItems= document.createElement('li');
        projectImageItems.classList.add('project-image--item');

        const img= document.createElement('img');
        img.classList.add('project-image--item--content');
        img.src=workData[i].img[j];
        projectImageItems.appendChild(img);
        projectImage.appendChild(projectImageItems);
      }
      
      ctaContainer.children[0].style.display='flex';
      ctaWork.children[0].style.color= black;
      ctaWork.children[0].textContent= 'next project';
      ctaContainer.children[1].style.display='flex';
      ctaAbout.children[0].style.color= black;
      ctaAbout.children[0].textContent= 'previous project';
      heroImg.children[0].src=workData[i].hero;
    }
  }
})

arrowNext.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[10].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
    cleanItems();
    lastToFirstProject();
  }else{
    for(let i=0;i<workData.length;i++){
      cleanItems();
      if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
        nextProject(i);
        break;
      }
    }
  }
});

arrowPrev.addEventListener('click',(e)=>{
  e.preventDefault();
  if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
    cleanItems();
    firstToLastProject();
  }else{
    for(let i=0;i<workData.length;i++){
      cleanItems();
      if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
        prevProject(i);
        break;
      }
    }
  }
});


hoverChange(workGallery);
hoverChange(introGallery);

window.addEventListener('resize', ()=>{


  //BUGFIX TO CHANGE BACKGROUND COLOR TO LIGHTGREY ON RESIZE TO MQ810
  document.body.style.backgroundColor= lightGrey;

  //BUGFIX TO SHOW BONJOUR ON RESIZE
  document.querySelector('.bonjour').children[0].style.color= purple;
  document.querySelector('.bonjour').children[1].style.color= purple;

//BUGFIX TO SHOW CTA BUTTONS ON RESIZE TO MQ810
  document.querySelector('.cta-container').style.display='flex';

  //ONE MORE BUGFIX TO GO: ON RESIZE ON ABOUT PAGE SKIPS TOP NAV....

  //BUGFIX TO SHOW INTROGALLERY ONLY AT PROPER TIMES 
  if(introText.style.display!== 'none'){
    introGallery.style.display= 'flex';
  }else{
    introGallery.style.display= 'none';
  }

});



