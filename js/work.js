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
        img: ['img/test1.jpg','img/test2.jpg','img/test3.jpg'],
        title:'nummer 6',
        intro: 'nummer 6 Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        extraInfo:'nummer 6 Sjaak magazine is a magazine for rotterdam citizens with a small budget. The idea of this magazine is to be a source of information and inspiration for people with a low income. Through inspiring interviews, stories and events, as well as useful tips, Sjaak shows that there are opportunities to lead a beautiful and healthy life even with a limited budget.The magazine is published four times a year and is distributed through social organizations in Rotterdam, including the Salvation Army and the Food Bank Foundation.',
        client:['pizza hut'],
        industry:'tralala',
        services:['art direction', 'photography'],
        year:'2020'
    }
];

//-------------------------------------------//
//-----------------VARIABLES-----------------//
//-------------------------------------------//

const workGalleryItem=document.querySelectorAll('.work-gallery-item');
//let workGalleryItem;

const extraInfoContainer= document.createElement('div');

//-------------------------------------------//
//-----------------FUNCTIONS-----------------//
//-------------------------------------------//

function generateWorkLI(){

    for(let i=0; i< workData.length; i++){

        const li=document.createElement('li')
        li.classList.add('work-gallery-item');
    
        const link= document.createElement('a');
        const img=document.createElement('img');
        const p=document.createElement('p');


        img.src= workData[i].img[0];
        p.textContent=workData[i].title;

        link.appendChild(p);
        link.appendChild(img);
        li.appendChild(link);
        //li.appendChild(div);
        workGallery.appendChild(li);
    }
}

 generateWorkLI();



function addContent(){

    const div= document.createElement('div');
    div.classList.add('extra-info-container','animated','fadeIn');

    const li= document.querySelector('.work-gallery-item');

    li.appendChild(div);


    div.innerHTML=`
    
    <div class="extra-info">
        <h2>sjaak magazine</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut!</p>
        <div class="show-more">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est nemo, cupiditate reprehenderit recusandae eius quidem ipsam! Tempora praesentium inventore velit quaerat earum vitae facilis cupiditate reiciendis at quasi, aspernatur vero repudiandae eaque assumenda iusto quibusdam reprehenderit! Nobis quibusdam, aperiam reiciendis animi asperiores quae temporibus id iusto quo, quam voluptate!</p>
        </div>
        <button class="show-more-btn">show more</button>
    </div>
    
    <div class="cisy">
        <div class="client">
            <h3>client</h3>
            <p>leger des heils</p>
        </div>
        <div class="industry">
            <h3>industry</h3>
            <p>non-profit</p>
        </div>
        <div class="services">
            <h3>services</h3>
            <p>concept,design,art direction,photography</p>
        </div>
        <div class="year">
            <h3>year</h3>
            <p>2018-2019 at DailyMilk</p>
        </div>
    </div>
    `;
    //workGalleryItem[0].appendChild(extraInfoContainer); //NU DOET HET HET ALLEEN BIJ DE EERSTE. HIER MOET DUS NOG EEN LOOP KOMEN.
    //extraInfoContainer.classList.add('animated','fadeIn');

    //showHideContent();

}


function removeContent(){
    //workGalleryItem[0].removeChild(extraInfoContainer);
    console.log('hahahaha');
}

//SHOW AND HIDE THE EXTRA CONTENT WHEN CLICKED ON BUTTON
// function showHideContent(){

//     const btn=document.querySelector('.show-more-btn');
//     const extraInfo= document.querySelector('.extra-info');
//     const showMore= document.querySelector('.show-more');

//     extraInfoContainer.addEventListener('click',(e)=>{
//         if(e.target.tagName === 'BUTTON' && e.target.textContent==='show more'){
//             showMore.style.display='block';
//             btn.innerHTML='show less';
//         }else if(e.target.tagName === 'BUTTON' && e.target.textContent ==='show less'){
//             showMore.style.display='none';
//             btn.innerHTML='show more';
//         }
//     })
// }




workGallery.addEventListener('click',(e)=>{

    //if(e.target.parentNode.children.length < 2 || ){

        if(e.target.tagName==='A'){
          
            if(e.target.parentNode.children.length < 2 ){
                //addContent();    
                console.log('add');     
            }else{
                //removeContent();
                console.log('remove');
            }
            
        }else if(e.target.tagName==='IMG' || e.target.tagName=== 'P'){
            
            if(e.target.parentNode.parentNode.children.length < 2){
                //addContent();
                console.log('add');   
            }else{
                //removeContent();
                console.log('remove');
            }
            
        }else{
        }   
       
    
    
});





