//-------------------------------------------//
//-----------------VARIABLES-----------------//
//-------------------------------------------//

//---------SASS COLORS---------//

const lightGrey = '#F5F5F5';
const purple    = '#70609F';
const black     = '#000000';




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

info.style.display= 'none';
workGallery.style.display='none';

projectContainer.style.display='none';


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
  //menu.style.backgroundColor=purple;
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

  // if( workGallery.style.display!='none'){
  //   //console.log('hahahah');
  //   for(i of workGallery.children){
  //     i.style.display='none';
  //   }
  // }else{
  //   for(i of workGallery.children){
  //     i.style.display='flex';
  //   }
  // }

  
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
  
  //ABOUT
  if(e.target === menuBtn[2]){


    //CHANGE CONTENT IN .MAIN-CONTAINER
    changeContent('none', 'none', 'flex','none','none');


    //STYLE HTML ELEMENTS 
    styleElements(purple, lightGrey);
    //ctaContainer.style.display='none';

    closeOnClick();


  }else if(e.target === menuBtn[0]){

    changeContent('flex', 'flex','none','none','none');

    styleElements(lightGrey, purple);

    closeOnClick();

  }else if(e.target === menuBtn[1]){
    changeContent('none','none','none','flex','none');
    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.color=purple;
    ctaContainer.children[1].children[1].style.stroke=purple;//THIS DOES NOT WORK YET. ALSO NOT IN ABOUT SECTION
    styleElements(lightGrey, purple);
    closeOnClick();
  }

});

ctaWork.addEventListener('click',()=>{
  //console.log('lalalal');

  //HIER MOET EEN IF STATEMENT KOMEN. ALS JE VANAF HOME KOMT,DAN DIT. ANDERS: ALS JE VAN WERK KOMT DAN EEN LOAD NAAR MEER WERK.
  changeContent('none','none','none','flex','none');
  styleElements(lightGrey, purple);
  //ctaContainer.style.display='flex';

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

ctaAbout.addEventListener('click',()=>{
  changeContent('none', 'none', 'flex','none','none');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

//DE CTA BUTTONS WERKEN NOG NIET CONSISTENT. NOG AFHANKELIJK VAN CONTEXT.




//BONJOUR ON LOAD AT 810PX


// if(){
//   mainWrapper
// }




//-------------------------------------------//
//---------ANIMATE BONJOUR ON LOAD-----------//
//-------------------------------------------//

//BONJOUR GETS ANIMATED WITH ANIMATE.CSS. THIS PART ONLY ANIMATES ALL THE OTHER ELEMENTS.

// window.onload= function(){
//     aside.css('margin', '0 auto');
//     hello.show();
//     setTimeout(() => {
//     test.fadeIn();
//     }, 1500);  
// }
//css('margin', '1em auto')



const hello= $('.bonjour');
const bon= $('.bon');
const jour= $('.jour');
const aside= $('.intro-text');

const test= $('.header-container,.menuicon,.intro-text-p,svg, .home-work,footer').not('.bonjour').css('display', 'none');


const mq810 = window.matchMedia("(min-width: 810px)");

//HIER WAS IK. DE HELE BONJOUR HANDEL MOET HIERIN. DE BONJOUR TEXT OPDELEN
//VOOR DE MQ810 EN ANIMEREN

function listenForMq(mq) {
  if (mq.matches) { 

    document.body.style.backgroundColor= purple;

    ctaContainer.style.display='none';
    introGallery.style.display='none';
    // sticky.style.height='0px';
    // mainWrapper.style.height='100vh';
    // mainWrapper.style.width="100%";
    


    window.onload= function(){
      aside.css('margin', '0 auto');

      bon.addClass('animated').addClass('bounceIn');

      bon.css({
        'font-size':'40vh',
        'display':'block',
        'margin':'0 auto',
      });

      bon.show();
      
      jour.addClass('animated').addClass('fadeInRight');
      jour.css({
        'font-size':'40vh',
        'display':'block',
        'margin':'0 auto',
      });
      jour.show();

      setTimeout(() => {
      test.fadeIn();
      document.body.style.backgroundColor= lightGrey;
      introGallery.style.display='flex';
      bon.css({
        'font-size':'3.5rem',
        'display':'inline',
        'color': purple,
        //'margin':'0 auto',
      })
      jour.css({
        'font-size':'3.5rem',
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
      test.fadeIn();
      }, 1500);  
  }

  }
}



listenForMq(mq810);
mq810.addListener(listenForMq);




//-------------------------------------------//
//--------------DATA STRUCTURES--------------//
//-------------------------------------------//

const workData=[
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'sjaak magazine',
        intro: 'The magazine made for Rotterdammers with a small budget.',
        extraInfo:'Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['Leger des Heils, Voedselbank'],
        industry:'non-profit',
        services:['concept', 'design', 'art direction', 'photography'],
        year:'2018 - 2019 at Dailymilk'
    },
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'nummer 2',
        intro: 'nummer 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 2 Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['satan'],
        industry:'profit',
        services:['concept', 'design'],
        year:'2018'
    },
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'nummer 3',
        intro: 'nummer 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 3 Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['burger king'],
        industry:'profit',
        services:['concept'],
        year:'2019'
    },
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'nummer 4',
        intro: 'nummer 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 4Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['KFC'],
        industry:'non-profit',
        services:[ 'art direction', 'photography'],
        year:'2020'
    },
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'nummer 5',
        intro: 'nummer 5 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 5 Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['mcDonalds'],
        industry:'profit',
        services:['concept', 'photography'],
        year:'2018 - 2019 at Dailymilk'
    },
    {
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg','img/test1.jpg'],
        title:'nummer 6',
        intro: 'nummer 6 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 6 Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['pizza hut'],
        industry:'tralala',
        services:['art direction', 'photography'],
        year:'2020'
    }
];






//--------------------------------------------------//
//-----HIDE AND SHOW CONTENT IN .MAIN-CONTAINER-----//
//--------------------------------------------------//

//const logo= document.querySelector('.logo');

logo.addEventListener('click',()=>{
  changeContent('flex','flex','none','none','none');
  styleElements(lightGrey, purple);

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

const projectTitle= document.querySelector('.project-info--title');
const projectText= document.querySelector('.project-info--text');

workGallery.addEventListener('click',(e)=>{

  for(let i=0;i<workGallery.children.length;i++){
    if(e.target.parentNode.children[1] === workGallery.children[i].children[1]){
      changeContent('none','none','none','none','flex');
      projectTitle.textContent= workData[i].title;
      projectText.textContent= workData[i].intro;
      showMore.textContent= workData[i].extraInfo;
    }
  }

  // if(e.target.parentNode.children[1] === workGallery.children[0].children[1]){
  //   changeContent('none','none','none','none','flex');
  //   projectTitle.textContent= workData[0].title;
  // }
  // else if(e.target.parentNode.children[1] === workGallery.children[1].children[1]){
  //   changeContent('none','none','none','none','flex');
  //   projectTitle.textContent= workData[1].title;
  // }else if(e.target.parentNode.children[1] === workGallery.children[2].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[3].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[4].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[5].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[6].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[7].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[8].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }else if(e.target.parentNode.children[1] === workGallery.children[9].children[1]){
  //   changeContent('none','none','none','none','flex');
  // }

  // console.log(e.target.src);
  // console.log(e.target);
  // console.log(e.target.parentNode.children[1]);
  // console.log(workGallery.children[0].children[1]);
})