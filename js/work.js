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

//-------------------------------------------//
//-----------------VARIABLES-----------------//
//-------------------------------------------//

// const workGalleryItem=document.querySelectorAll('.work-gallery-item');


// const extraInfoContainer= document.createElement('div');

//-------------------------------------------//
//-----------------FUNCTIONS-----------------//
//-------------------------------------------//

function generateWorkLI(){

    for(let i=0; i< workData.length; i++){

        const li=document.createElement('li')
        li.classList.add('work-gallery-item');
        //li.style.height= '200px';
        
    
        const link= document.createElement('div');
        //link.classList.add('glider-track');
        
        const p=document.createElement('p');
        p.textContent=workData[i].title;


        //const img=document.createElement('img');
        //img.classList.add('glide__slide');
        //img.src=workData[1].img[1];

        for(let j=0;j<workData[i].img.length;j++){

            const img=document.createElement('img');
            img.src=workData[i].img[j];
            //img.classList.add('');
            link.appendChild(img);
        }


        

        link.appendChild(p);

         //link.appendChild(img);

        li.appendChild(link);
        workGallery.appendChild(li);
      
        
       
    }
}

generateWorkLI();



function addContent(e){

    const li=document.querySelectorAll('.work-gallery-item');


    if(e.target.tagName==='DIV'){

        for(let i=0;i<li.length;i++){

            if(e.target.parentNode===li[i]){
                innerContent(i,workData[i].title,workData[i].intro,workData[i].extraInfo,workData[i].client,workData[i].industry,workData[i].services,workData[i].year);    
            }
        }

    }
    else if(e.target.tagName==='IMG' || e.target.tagName==='P'){

        //e.target.tagName=== 'P'

        for(let i=0;i<li.length;i++){

            if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode===li[i]){
                innerContent(i,workData[i].title,workData[i].intro,workData[i].extraInfo,workData[i].client,workData[i].industry,workData[i].services,workData[i].year);  
            }

        }
    }
}


function innerContent(num,title,intro,extraInfo,client,industry,services,year){


    const div= document.createElement('div');
    div.classList.add('extra-info-container','animated','fadeIn');

    const li= document.querySelectorAll('.work-gallery-item');

    li[num].appendChild(div);
    
    div.innerHTML=`
        <div class="extra-info">
            <h2>${title}</h2>
            <p>${intro}</p>
            <div class="show-more">
                <p>${extraInfo}</p>
            </div>
            <button class="show-more-btn">show more</button>
        </div>
        
        <div class="cisy">
            <div class="client">
                <h3>client</h3>
                <p>${client}</p>
            </div>
            <div class="industry">
                <h3>industry</h3>
                <p>${industry}</p>
            </div>
            <div class="services">
                <h3>services</h3>
                <p>${services}</p>
            </div>
            <div class="year">
                <h3>year</h3>
                <p>${year}</p>
            </div>
        </div>
    `;

    showHideContent();
    
}


function removeContent(e){
    
    const div= document.querySelectorAll('.extra-info-container');
    const li= document.querySelectorAll('.work-gallery-item');

    if(e.target.parentNode.tagName==='LI'){

        e.target.parentNode.removeChild(e.target.parentNode.children[1]);
        
        
    }
    // else if(e.target.parentNode.parentNode.tagName==='LI'){
    //     e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.children[1]);
    // }   
    else if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.tagName==='LI'){
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[1]);
    } 
}

//SHOW AND HIDE THE EXTRA CONTENT WHEN CLICKED ON BUTTON
function showHideContent(){

    const btn=document.querySelectorAll('.show-more-btn');
    const extraInfo= document.querySelectorAll('.extra-info');
    const showMore= document.querySelectorAll('.show-more');

for(let i=0; i<extraInfo.length;i++){

    workGallery.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON' && e.target.textContent==='show more'){
            showMore[i].style.display='block';
            btn[i].innerHTML='show less';
        }else if(e.target.tagName === 'BUTTON' && e.target.textContent ==='show less'){
            showMore[i].style.display='none';
            btn[i].innerHTML='show more';
        }
       
    })

    

    }
}




workGallery.addEventListener('click',(e)=>{


    console.log(e.target.tagName);
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

        if(e.target.tagName==='DIV'){
          
            if(e.target.parentNode.children.length < 2 ){ // HIER KLOPPEN DINGEN NIET. IS DIT ALLEMAAL NOG WEL NODIG???
                addContent(e);    
                   
            }else{
                removeContent(e);   
            }  
        }else if(e.target.tagName=== 'DIV'){

            if(e.target.parentNode.parentNode.children.length < 2){
                addContent(e);    
            }else{
                removeContent(e);     
            }   
        }else if(e.target.tagName==='IMG' || e.target.tagName==='P'){


            
            if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children.length < 2){
                addContent(e);    
                //console.log('ahahaha');
            }else{
                removeContent(e);     
                //console.log('nee joh niet doen hoor');
            }  
        }   
});





function generateIntroLI(){

    for(let i=0; i<3; i++){

        const li=document.createElement('li')
        li.classList.add('intro-gallery-item');
    
        const link= document.createElement('div');
        
        const p=document.createElement('p');
        p.textContent=workData[i].title;

        for(let j=0;j<workData[i].img.length;j++){

            const img=document.createElement('img');
            img.src=workData[i].img[j];
            //img.classList.add('');
            link.appendChild(img);
        }
        link.appendChild(p);
        li.appendChild(link);
        introGallery.appendChild(li);
    }
}

 generateIntroLI();