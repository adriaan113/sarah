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

    ctaContainer.children[0].style.display='none';
    ctaContainer.children[1].style.display='none';

    //STYLE HTML ELEMENTS 
    styleElements(purple, lightGrey);
    //ctaContainer.style.display='none';

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
    ctaContainer.children[1].children[1].style.stroke=purple;//THIS DOES NOT WORK YET. ALSO NOT IN ABOUT SECTION
    
    styleElements(lightGrey, purple);
    closeOnClick();
  }

});


ctaWork.addEventListener('click',(e)=>{

  if(ctaWork.children[0].textContent==='view more projects'){
    
    changeContent('none','none','none','flex','none');
    styleElements(lightGrey, purple);
    ctaContainer.style.display='flex';
  
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  }else if(ctaWork.children[0].textContent=== 'next project'){


     for(let i=0;i<workData.length;i++){

      //cleanItems();

      if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[10].title){
    
        cleanItems();

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


      }else if(e.target.parentNode.parentNode.parentNode.children[3].children[1].children[0].textContent===workData[i].title){

        cleanItems();
        
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
        break;
        
    }
  }
  }
})

// ctaWork.addEventListener('click',()=>{

//     changeContent('none','none','none','flex','none');
//     styleElements(lightGrey, purple);
//     ctaContainer.style.display='flex';
  
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });



ctaAbout.addEventListener('click',()=>{
  changeContent('none', 'none', 'flex','none','none');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})






//BONJOUR ON LOAD AT 810PX


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

//--------------------------------------------------//
//-----HIDE AND SHOW CONTENT IN .MAIN-CONTAINER-----//
//--------------------------------------------------//

//const logo= document.querySelector('.logo');

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

const projectTitle= document.querySelector('.project-info--title');
const projectText= document.querySelector('.project-info--text');
const projectImage= document.querySelector('.project-image');

const heroImg= document.querySelector('.hero');

//CISY
const client=document.querySelector('.client');
const industry=document.querySelector('.industry');
const services=document.querySelector('.services');
const year=document.querySelector('.year');

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



function cleanItems(){
  while( projectImage.firstChild ){
    projectImage.removeChild( projectImage.firstChild );
  }
}


workGallery.addEventListener('click',(e)=>{

  //console.log(workGallery.children[0].children[1]);

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
      ctaWork.children[0].style.color= 'red';
      ctaWork.children[0].textContent= 'next project';
      ctaContainer.children[1].style.display='flex';
      ctaAbout.children[0].style.color='blue';
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
      ctaWork.children[0].style.color= 'red';
      ctaWork.children[0].textContent= nextItem(i);
      ctaContainer.children[1].style.display='flex';
      ctaAbout.children[0].style.color='blue';
      ctaAbout.children[0].textContent= prevItem(i);
      heroImg.children[0].src=workData[i].hero;
    }
  }
})


const arrowNext=document.querySelector('.arrow-next');
const arrowPrev=document.querySelector('.arrow-prev');

//TO DO: MAKE FUNCTIONS OUT OF MOST OF THIS. 
//       MAKE AN IF FUNCTION FOR BEGINNING AND END OF THE WORKDATA SO THAT IT CAN LOOP


arrowNext.addEventListener('click',(e)=>{

  e.preventDefault();

  if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[10].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
    
    cleanItems();

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

  }else{

    for(let i=0;i<workData.length;i++){

      cleanItems();
    
      if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){

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
  
        break;
      }
    }

  }

});

arrowPrev.addEventListener('click',(e)=>{

  e.preventDefault();

  if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[0].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){

    cleanItems();

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

  }else{

    for(let i=0;i<workData.length;i++){

      cleanItems();
    
      if(e.target.parentNode.parentNode.parentNode.parentNode.children[2].children[i].children[1].textContent.toLowerCase()===e.target.parentNode.parentNode.parentNode.children[1].children[0].textContent.toLowerCase()){
  
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
        break;
      }
    }
  }
});


//-------------------------------------------//
//--------------DATA STRUCTURES--------------//
//-------------------------------------------//

const workData=[
  {
      hero: '../img/work/01_sjaak_magazine/0_SJAAK_first_visual_1600x904px.png',
      img: ['../img/work/01_sjaak_magazine/01_sjaak_magazine_visuals_website_1200px.png',
            '../img/work/01_sjaak_magazine/02_sjaak_magazine_visuals_website_1200px.png',
            '../img/work/01_sjaak_magazine/03_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/04_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/05_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/06_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/07_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/08_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/09_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/10_sjaak_magazine_visuals_website_590px.png',
            '../img/work/01_sjaak_magazine/11_sjaak_magazine_visuals_website_1200px.png',
            '../img/work/01_sjaak_magazine/12_sjaak_magazine_visuals_website_1200px.png',],
      title:'sjaak magazine',
      intro: 'The magazine made for Rotterdammers with a small budget.',
      extraInfo:'Sjaak is a magazine made for Rotterdamers with a small budget. The idea of this magazine, published four times a year, is to propose inspiring interviews, stories and give useful tips to people who do not have a lot of money. I worked together with dutch photographers Adriaan van der Ploeg, Mark David Photography, Rick Arnold and Rick van der Klooster.',
      client:['Leger des Heils, Voedselbank'],
      industry:'non-profit',
      services:['concept', 'design', 'art direction', 'photography'],
      year:'2018 - 2019 at Dailymilk'
  },
  {
      hero: '../img/work/02_kathedraal/0_CATHEDRAL_first_visual_1600x904px.png',
      img: ['../img/work/02_kathedraal/01_cathedral_visuals_website_1200px.png',
            '../img/work/02_kathedraal/02_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/03_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/04_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/05_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/06_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/07_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/08_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/09_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/10_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/11_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/12_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/13_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/14_cathedral_visuals_website_590px.png',
            '../img/work/02_kathedraal/15_cathedral_visuals_website_590px.png',],
      title:'ROTTERDAM CATHEDRAL GUIDE',
      intro: 'A guided tour through the cathedral of Rotterdam.',
      extraInfo:'The design is based on the actual architectural drawings of the cathedral. The three Pantone colours used are the most used colours inside the cathedral: gold, blue and green. The colour system of the book helps the visitor to understand where he is in the cathedral (west, center or east side of the building). The book is available at the entrance of the cathedral.',
      client:['Cathedral of Rotterdam'],
      industry:'profit',
      services:['concept', 'design'],
      year:'2019 at Dailymilk'
  },
  {
      hero: '../img/work/03_green_orange/0_GREENORANGE_first_visual_1600x904px.png',
      img: ['../img/work/03_green_orange/01_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/02_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/03_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/04_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/05_greenorange_visuals_website_1200px.png',
            '../img/work/03_green_orange/06_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/07_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/08_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/09_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/10_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/11_greenorange_visuals_website_590px.png',
            '../img/work/03_green_orange/12_greenorange_visuals_website_1200px.png',
            '../img/work/03_green_orange/13_greenorange_visuals_website_590px.png',],
      title:'GREEN ORANGE',
      intro: 'Green Orange is a digital agency for business performance.',
      extraInfo:'They help businesses improve their results with data-driven strategies and solutions. Because they believe that monetizing digital solutions and data insights will lead to continuous growth and will help their clients improve their business performance. They are always looking for the ‘what’s next’. Switch to the future, let’s GO!',
      client:['Green Orange'],
      industry:'profit',
      services:['branding','website'],
      year:'2018 at Dailymilk'
  },
  {
      hero: '../img/work/04_mastercareerweek/0_MASTERCAREERWEEK_first_visual_1600x904px.png',
      img: ['../img/work/04_mastercareerweek/01_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/02_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/03_mastercareerweek_visuals_website_1200px.png',
            '../img/work/04_mastercareerweek/04_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/05_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/06_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/07_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/08_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/09_mastercareerweek_visuals_website_590px.png',
            '../img/work/04_mastercareerweek/10_mastercareerweek_visuals_website_1200px.png'],
      title:'MASTER CAREER WEEK',
      intro: 'The Master Career Week is a recruitment event.',
      extraInfo:'The Master Career Week is a recruitment event which was created to connect the Erasmus School of Economics master students to their future employers. By organising bootcamps and business trips that are each focused on one specific branch. Step into your future.',
      client:['EFR','Economic Faculty association Rotterdam'],
      industry:'profit',
      services:[ 'strategy', 'branding'],
      year:'2019 at Dailymilk'
  },
  {
      hero: '../img/work/05_klyp_software/0_KLYP_first_visual_1600x904px.png',
      img: ['../img/work/05_klyp_software/01_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/02_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/03_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/04_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/05_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/06_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/07_klyp_visuals_website_1200px.png',
            '../img/work/05_klyp_software/08_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/09_klyp_visuals_website_590px.png',
            '../img/work/05_klyp_software/10_klyp_visuals_website_1200px.png',
            '../img/work/05_klyp_software/11_klyp_visuals_website_590px.png'],
      title:'KLYP SOFTWARE',
      intro: 'Klyp is a new online archiving software.',
      extraInfo:'Klyp likes it tidy and well organised. With him you can digitalise, classify, share, archive and retrieve documents efficiently. And all of that online. No hassle anymore with folders and binders. That ensures peace and efficient work. Klik, Klyp, Klaar! ',
      client:['Klyp software'],
      industry:'profit',
      services:['strategt', 'branding','website'],
      year:'2018 - 2019 at Dailymilk'
  },
  {
      hero:'../img/work/06_renee_recycle/0_RENEErecycle_first_visual_1600x904px.png',
      img: ['../img/work/06_renee_recycle/01_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/02_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/03_reneerecycle_visuals_website_1200px.png',
            '../img/work/06_renee_recycle/04_reneerecycle_visuals_website_1200px.png',
            '../img/work/06_renee_recycle/05_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/06_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/07_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/08_reneerecycle_visuals_website_590px.png',
            '../img/work/06_renee_recycle/09_reneerecycle_visuals_website_1200px.png'],
      title:'RENÉE RECYCLE',
      intro: 'Renée’s savoir-faire is built around four pillars: recovery, recycling, restoration and reuse of objects that are considered to be at the end of their life. Renée’s philosophy: the eternal recommencement.',
      extraInfo:'Renée responds to the environmental challenges of our time by rejecting waste and offers an alternative to the current consumption model. Renée has chosen to dedicate her life to bringing up to date what must remain alive. It does not matter what: fashion, decorative objects, furnitures or textiles. All are collected and transformed to give them a new purpose and a new life.',
      client:['Renée Recycle'],
      industry:'profit',
      services:['visual identity'],
      year:'2016-2017'
  },
  {
      hero:'../img/work/07_60magazine/0_60MAGAZINE_first_visual_1600x904px.png',
      img: ['../img/work/07_60magazine/01_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/02_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/03_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/04_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/05_60magazine_visuals_website_1200px.png',
            '../img/work/07_60magazine/06_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/07_60magazine_visuals_website_590px.png',
            '../img/work/07_60magazine/08_60magazine_visuals_website_1200px.png',
            '../img/work/07_60magazine/09_60magazine_visuals_website_1200px.png',
            '../img/work/07_60magazine/10_60magazine_visuals_website_1200px.png'],
      title:'60 MAGAZINE',
      intro: 'A futuristic looking back at 60 years of school.',
      extraInfo:'The school’s anniversary was used to look ahead. Through the eyes of a fictive ‘former student from the future’ we introduce the reader to the vision of the school. The magazine is also filled with inspiring stories and testimonies from well-known and less well-known former students and actual students. The design was created around three pillars: past, present and future.',
      client:['GSR School Rotterdam'],
      industry:'profit',
      services:['concept','design','art direction'],
      year:'2018 at Dailymilk'
  },
  {
      hero:'../img/work/08_accord_vocal/0_ACCORD_vocal_first_visual_1600x904px.png',
      img: ['../img/work/08_accord_vocal/01_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/02_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/03_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/04_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/05_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/06_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/07_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/08_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/09_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/10_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/11_accord_vocal_visuals_website_1200px.png',
            '../img/work/08_accord_vocal/12_accord_vocal_visuals_website_1200px.png'],
      title:'ACCORD’ VOCAL',
      intro: 'Every language has is own music.',
      extraInfo:'People say for example that Italian is melodious, or that Chinese is jolting. If we are talking about musicality and music, it means there is an instrument behind it. This instrument is the phonatory system. And as any instrument, it has to be tuned up to play the good music. It is what the application ‘Accord’Vocal’ proposes. It is working like a tuner. The system is based on the International Phonetic Alphabet.',
      client:['Own project'],
      industry:'non-profit',
      services:['research','concept','website'],
      year:'2015- ongoing'
  },
  {
      hero:'../img/work/09_musicality_languages/0_MUSICALITY_languages_first_visual_1600x904px.png',
      img: ['../img/work/09_musicality_languages/01_musicality_languages_visuals_website_1200px.png',
            '../img/work/09_musicality_languages/02_musicality_languages_visuals_website_590px.png',
            '../img/work/09_musicality_languages/03_musicality_languages_visuals_website_590px.png',
            '../img/work/09_musicality_languages/04_musicality_languages_visuals_website_1200px.png',
            '../img/work/09_musicality_languages/05_musicality_languages_visuals_website_1200px.png',
            '../img/work/09_musicality_languages/06_musicality_languages_visuals_website_1200px.png',
            '../img/work/09_musicality_languages/07_musicality_languages_visuals_website_1200px.png'],
      title:'MUSICALITY OF LANGUAGES',
      intro: 'Every language has its own music. And music has the ability to evoke powerful emotional responses.',
      extraInfo:'For example, it is often said that Italian is characterised by an innate musicality that makes this language wonderfully pleasant to listen to. On the contrary, German is often perceived as a strict and stern language. I focused on these emotional responses and I created a little game:- I designed a collection of 45 pictograms, each representing an emotional response;- I have asked several people to listen to different voice recordings. Without telling them which language it is (to avoid any prejudice);- I stop the recordings every 10/20 seconds, and ask them to give me, without thinking, the first adjective that comes to their mind to describe what they feel. The result is a series of posters representing the emotional responses of different languages.',
      client:['Own project'],
      industry:'non-profit',
      services:['research','design experimentation'],
      year:'2015'
  },
  {
      hero:'../img/work/10_exercices_de_style/0_EXERCICES_destyle_first_visual_1600x904px.png',
      img: ['../img/work/10_exercices_de_style/01_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/02_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/03_exercices_destyle_visuals_website_1200px.png',
            '../img/work/10_exercices_de_style/04_exercices_destyle_visuals_website_1200px.png',
            '../img/work/10_exercices_de_style/05_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/06_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/07_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/08_exercices_destyle_visuals_website_590px.png',
            '../img/work/10_exercices_de_style/09_exercices_destyle_visuals_website_1200px.png'],
      title:'EXERCICES DE STYLE TYPOGRAPHIQUE',
      intro: 'A typographical interpretation of the book "Exercices de Style" by Raymond Queneau (originally published in 1947).',
      extraInfo:'Queneau’s 99 texts tell the same story in 99 different literary styles. From flowering swear words to smelly typography we have created a big range of typographic expression. Look out for preciously typeset vulgar text, geometric concrete poetry and black and white rainbows.',
      client:['Workshop with Europa Studio, a graphic design company based in London.'],
      industry:'non-profit',
      services:['typography','experimentation','editorial design'],
      year:'2014'
  },
  {
      hero:'../img/work/11_semipermeabel/0_SEMIPERMEABEL_first_visual_1600x904px.png',
      img: ['../img/work/11_semipermeabel/01_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/02_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/03_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/04_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/05_semipermeabel_visuals_website_1200px.png',
            '../img/work/11_semipermeabel/06_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/07_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/08_semipermeabel_visuals_website_1200px.png',
            '../img/work/11_semipermeabel/09_semipermeabel_visuals_website_590px.png',
            '../img/work/11_semipermeabel/10_semipermeabel_visuals_website_590px.png'],
      title:'SEMIPERMEABEL',
      intro: 'Photography facing fashion and identity.',
      extraInfo:'A photographic study from the outer fashion shell to the search for the true inner skin. The photographs deal with intimacy, passion, uniformity, veiling and the question of when fashion becomes the skin and vice versa. The project was concluded with an exhibition and a magazine: ‘How to create originals in times of eclecticism?’ For this project I worked together with two german models: Eveline Hall (74), former ballerina and actress. And Amélie Baasner.',
      client:['Own project directed and coordinated by german fashion photographer Joachim Baldauf. Exhibition at the Seven Star Gallery, Berlin'],
      industry:'non-profit',
      services:['fashion photography'],
      year:'2012'
  }
];