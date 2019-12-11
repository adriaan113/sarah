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

// const workGalleryItem=document.querySelectorAll('.work-gallery-item');


// const extraInfoContainer= document.createElement('div');

//-------------------------------------------//
//-----------------FUNCTIONS-----------------//
//-------------------------------------------//

function generateWorkLI(){

    for(let i=0; i< workData.length; i++){

        const li=document.createElement('li')
        li.classList.add('work-gallery-item');
    
        const link= document.createElement('a');
        //const img=document.createElement('img');
        const p=document.createElement('p');

        // for(let j=0;j<workData[i].img.length;j++){
        //     const img=document.createElement('img')[j];
        //     img[j].src= workData[i].img[j];
        // }

        const img1=document.createElement('img');
        const img2=document.createElement('img');
        const img3=document.createElement('img');

        img1.src= workData[0].img[0];
        img2.src= workData[0].img[1];
        img3.src= workData[0].img[2];
        
        p.textContent=workData[i].title;

        link.appendChild(p);
        //link.appendChild(img);
        link.appendChild(img1);
        link.appendChild(img2);
        link.appendChild(img3);
        li.appendChild(link);
        workGallery.appendChild(li);
    }
}

generateWorkLI();



function addContent(e){

    const li=document.querySelectorAll('.work-gallery-item');


    if(e.target.tagName==='A'){

        for(let i=0;i<li.length;i++){

            if(e.target.parentNode===li[i]){
                innerContent(i,workData[i].title,workData[i].intro,workData[i].extraInfo,workData[i].client,workData[i].industry,workData[i].services,workData[i].year);    
            }
        }

    }else if(e.target.tagName==='IMG' || e.target.tagName=== 'P'){


        for(let i=0;i<li.length;i++){

            if(e.target.parentNode.parentNode===li[i]){
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
        
        
    }else if(e.target.parentNode.parentNode.tagName==='LI'){
        e.target.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.children[1]);
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


        if(e.target.tagName==='A'){
          
            if(e.target.parentNode.children.length < 2 ){ // HIER KLOPPEN DINGEN NIET. IS DIT ALLEMAAL NOG WEL NODIG???
                addContent(e);    
                   
            }else{
                removeContent(e);   
            }  
        }else if(e.target.tagName==='IMG' || e.target.tagName=== 'P'){

            if(e.target.parentNode.parentNode.children.length < 2){
                addContent(e);    
            }else{
                removeContent(e);     
            }   
        }else{
        }   
});




