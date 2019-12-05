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


const workGalleryItem=document.querySelectorAll('.work-gallery-item');

const extraInfoContainer= document.createElement('div');
extraInfoContainer.classList.add('extra-info-container');


//LOOP OVER WORKGALLERYITEMS AND CHANGE THE TITLE
for(i of workGalleryItem){
    const x= i.children[0].children[1].innerHTML;
    const title= x.replace("%title",workData[0].title);
    i.children[0].children[1].innerHTML=title;
}

workGallery.addEventListener('click',(e)=>{
   
    if(e.target.tagName==='A'){
        //console.log('satan');
        addcontent();
    }else if(e.target.tagName==='P'){
        //console.log('dit is een P element');
        addcontent();
    }else{
        //console.log('dit moet dan wel de UL zijn toch?');
    }   
    //console.log(e.target);
});




function addcontent(){

extraInfoContainer.innerHTML=`

<div class="extra-info">
    <h4>sjaak magazine</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ut!</p>
    <div class="show-more">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est nemo, cupiditate reprehenderit recusandae eius quidem ipsam! Tempora praesentium inventore velit quaerat earum vitae facilis cupiditate reiciendis at quasi, aspernatur vero repudiandae eaque assumenda iusto quibusdam reprehenderit! Nobis quibusdam, aperiam reiciendis animi asperiores quae temporibus id iusto quo, quam voluptate!</p>
    </div>
    <button>show more</button>
</div>

<div class="cisy">
    <div class="client">
        <p>client</p>
        <p>leger des heils</p>
    </div>
    <div class="industry">
        <p>non-profit</p>
    </div>
    <div class="services">
        <p>concept,design,art direction,photography</p>
    </div>
    <div class="year">
        <p>2018-2019 at DailyMilk</p>
    </div>
</div>
`;
}