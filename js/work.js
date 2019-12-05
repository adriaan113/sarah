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
    }
];






// const asideTest= document.querySelector('.intro-text');
// const work= document.querySelector('.home-work');
// const grid=document.querySelector('.grid');
// const content= document.querySelectorAll('.grid li');
// const ctaContainer= document.querySelector('.cta-container');
// const footer= document.querySelector('footer')
// const header=document.querySelector('.header-container');
// const mainWrapper=document.querySelector('.main-wrapper');
// const menuIcon=document.querySelector('.menuicon__circle');

// const navMenu= document.querySelector('.nav__menu');
// const menuBtn= document.querySelectorAll('.nav__link');

// const ctaBtn= document.querySelector('.cta-work');



// // for(let i=0;i<menuBtn.length;i++){
    
// // }

// //replace [1] for event to more easliy change to contact/about. Then just use a conditional
// navMenu.addEventListener('click',(e)=>{

//     if( e.target === menuBtn[2]){

//         //&&work.children.length<=2

//         asideTest.style.display= 'none';
//         grid.style.display= 'none';
//         ctaContainer.style.display='none';


//         // for(let i=0;i<content.length;i++){
//         //     content[i].style.display='none';
//         // }

//         const info= document.createElement('div');
//         info.classList.add('info');

//         info.innerHTML=`
//             <div class="about-me">
//                 <h1>About me</h1>
//                 <h4>I am gonna write a text about myself. Blablablablabla. Fernam, sequist, soluptati sum esciaepe idit evernatem sunt et, invendunt aut esendis modis et offictur. Sedit qui doluptas dolupti incide.</h4>
//                 <img src="../img/sarah.jpg" alt="portret van sarah">
//                 <a>
//                     <svg width="70" height="74" viewBox="0 40 146 74" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M3 3l70 68 70-68" stroke="#fff" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linejoin="bevel"/>
//                     </svg>
//                 </a>
//             </div>

//             <div class="whoiam">
//                 <h2>Who i am</h2>
//                 <p>I am gonna write a text about myself. Blablablablabla. Fernam, sequist, soluptati sum esciaepe idit evernatem sunt et, invendunt aut esendis modis et offictur. Sedit qui doluptas dolupti incide ea volute quo torectus, cuptionsed es volo conse aut es vendit maxim intium asim as magnis mod qui omnimaxim hil et offic tet aceprov itatecte nos ipsaes poreper umquaestrum fuga. Itatumqui omnient voluptas nem et es enis ra nosae voloris imuscil idigend elitatio.
//                 Ut imet anda quidero vernatur accatatiam id molupta ipiet fugiate nisquiandis essus nullatur accuptis que venit labo. Ehenihil imolendanda ditatur? Que nonecepudam, offictur sus doluptae voluptaquis dis nobist, as esequis excepud issimoluptae od que vent ad quunt aut earum quatem enest, optati blatio. Que nonecepudam, offictur sus doluptae voluptaquis dis nobist, as esequis excepud issimoluptae od que vent ad quunt aut earum quatem enest, optati blatio. Nequat. Ut imet anda quidero vernatur accatatiam id molupta ipiet fugiate nisquiandis essus nullatur accuptis que venit labo.</p>
//             </div>

//             <div class="whatido">
//             <h2>& what i do</h2>
//             <p>Que nonecepudam, offictur sus doluptae voluptaquis dis nobist, as esequis excepud issimoluptae od que vent ad quunt aut earum quatem enest, optati blatio. Que nonecepudam, offictur sus doluptae voluptaquis dis nobist, as esequis excepud issimoluptae od que vent ad quunt aut earum quatem enest, optati blatio. Nequat. Ut imet anda quidero vernatur accatatiam id molupta ipiet fugiate nisquiandis essus nullatur accuptis que venit labo. Ehenihil imolendanda ditatur.</p>
//             <a> 
//                 <svg width="70" height="74" viewBox="0 40 146 74" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M3 3l70 68 70-68" stroke="#fff" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linejoin="bevel"/>
//                 </svg>
//             </a>
//             </div>

//             <div class="contact">
//                 <h1>contact</h1>
//                 <div>
//                     <a><p>lancelin.sarah@gmail.com</p></a>
//                     <a><p>0031 (6) 304 758 10</p></a>
//                     <a><p>LinkedIn</p></a>
//                 </div>
//                 <div>
//                     <p>
//                         <span>Based in Rotterdam,</span> 
//                         <span>the Netherlands</span>
//                         <span>KVK number 64247309</span> <span>BTW number B01 NL349488289</span>
//                     </p>
//                 </div>
//             </div>
//         `;
//         work.appendChild(info);

//         footer.style.backgroundColor='#70609F';
//         header.style.backgroundColor='#70609F';
//         mainWrapper.style.backgroundColor='#70609F';
//         menuIcon.style.fill='#F5F5F5';
//         //HOW CAN I USE THE SASS COLOR VARIABLES HERE??

      
//         logo.classList.toggle('logo-hidden');
//         menu.classList.toggle('test');
//         isMenuOpen = !isMenuOpen;
//         menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
//         menu.hidden = !isMenuOpen;
//         nav.classList.toggle('nav--open');


//     }else if( e.target === menuBtn[0]){
        
//         //work.children.length<=2 &&

//         asideTest.style.display= 'flex';
//         grid.style.display= 'flex';
//         ctaContainer.style.display='flex';

//         // if(info){
//         //     info.style.display= 'none';
//         // }

        
//         //console.log('satan');

//     }else{
//         console.log('wat moet ik in dit else block zetten om te voorkomen dat ie sowieso iets doet??');
//     }


//     // // console.log('satan');
// });
