

/*
DOM
var img1  = document.getElementById("")
var imgs  = document.getElementsByClassName("img-item");//IE8
var h4s  = document.getElementsByTagName("h4");

var h4s  = document.getElementsByName("gender");
var h4s  = document.querySelectorAll(".container h1");//IE8
var h4s  = document.querySelector(".container .item");//IE8

element.style.anyCssProperty
element.style.cssText
element.innerHTML
element.classList

*/




var images =Array.from(document.getElementsByClassName("img-item"));
var lightBoxContainer =document.getElementById("lightboxContainer");
var lightBoxItem=document.getElementById("lightboxitem");
var closeIcon= document.getElementById("close");
var prevIcon= document.getElementById("prev");
var nextIcon= document.getElementById("next");
var curentSlideIndex=0;           // متغير لرقم الصورة الي اتفتحت


for (var i=0;i<images.length;i++)
{
    images[i].addEventListener("click",openLighBox);
}

function openLighBox(eventInfo){

    curentSlideIndex = images.indexOf(eventInfo.target);
    
    /*  بيشوف رقم الصورة الي اتفتحت الي المستخدم داس عليها وهنحطها في متغير اسمه كرنت سلايد وكنا معرفين المتغير ده في الاول
    يعني جاب الاري وقالها هاتي رقم الصوره الي المستخدم داس عليها*/

    var imgSrc= eventInfo.target.src;
    lightBoxContainer.style.display ="flex";
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
closeIcon.addEventListener("click",closelightBox)

function closelightBox(){
    lightBoxContainer.style.display ="none";

}


nextIcon.addEventListener("click",nextSlide)

function nextSlide(){

   curentSlideIndex++;  //دي معناها الصوره رقم  1
   // هنا رقم الصورة بعد مازودنا عليها واحد يعني الصورة الي المستخدم داس عليها وبعدين زودنا واحد علشان تيجي الصورة الي بعدها

   if(curentSlideIndex==images.length){

       curentSlideIndex == 0  
/*دي معناها ان ال كرنت هيفضل يزود وممكن يوصل لحد رقم 6 و7 وانا معنديش غير 5 صور بس فكده ممكن يدي خطا فالحل اني اعمل اف لو العدد بقي بيساوي 6 رجعولي لل صوره الاةلي الي هيا بتساوي صفر علشان يبدا من الاول تاني او ممكن اكت

  images.length الي هو يوصل لاخر الاري ويبدا من الاول تاني */
   }
   var imgSrc= images[curentSlideIndex].src;
     // هنا بقي بيقوله هات من الصور بتاعتك الصوره الجديده الي هيا الصوره بعد مازودنا واحد وهات المسار بتاعها
   lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

}


prevIcon.addEventListener("click",prevSlide)

function prevSlide(){
    curentSlideIndex--;
    var imgSrc= images[curentSlideIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

}

document.addEventListener("keydown",function (e)
 {
    if(e.keyCode==39){
        nextSlide();  /*لو عاوزة ادوس علي السهم اليمين فرقم السهم اليمين 39 
        keyCod هو ده بتاع رقم السهم*/

    }else if(e.keyCode==37){

        prevSlide();      
          /*لو عاوزة ادوس علي السهم الشمال فرقم السهم اليمين 37 
        keyCod هو ده بتاع رقم السهم*/

    }else if(e.keyCode==27){

        closelightBox();   
         /*لو عاوزة ادوس علي خروج خالص ا esc 
        keyCod هو ده بتاع رقم السهم*/
    }
})


lightBoxContainer.addEventListener("click",)

function closeany(e) {  //ده لو دوست ع الصوره وعاوزة ادوس علي اي حته خارج الصورة فتيجي الصورة تتقفل

    if(e.target != lightBoxItem){
  // دي معانا اني ادوس في اي حته غير اني ادوس في المكان الي بيتعرض فيه الصور الي هو lightbox
        closelightBox();
    }
    
}




/*
حل اخر

var images = Array.from (document.getElementsByClassName("img-item"));
var lightBoxContainer =document.getElementById("lightboxContainer");
var lightBoxItem=document.getElementById("lightboxitem");
var closeIcon = document.getElementById("close");
var nextIcon = document.getElementById("next");
var prevIcon = document.getElementById("prev");
var currentIndex=0;



for (var i=0;i<images.length;i++)
{
    images[i].addEventListener("click",openLighBox);
}
function openLighBox(eventInfo){

    currentIndex=images.indexOf(eventInfo.target);

    var imageSrc = eventInfo.target.src;
    lightBoxContainer.style.display ="flex";
    lightBoxItem.style.backgroundImage=`url(${imageSrc})` 
}
closeIcon.addEventListener("click",close)

function close(){
    lightBoxContainer.style.display ="none";
}

function slide (x){
    currentIndex+=x
    if(currentIndex == images.length)
    {
        currentIndex=0;
    }else if(currentIndex<0)
    {
        currentIndex = images.length-1;  
    }
    var imgSrc= images[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
nextIcon.addEventListener("click",function(){
    slide(1);
});
prevIcon.addEventListener("click",function(){
    slide(-1);
});


document.addEventListener("kewdown",function(eventInfo)
{
    if(eventInfo.keycode==39){
        slide(1);

    }else if(eventInfo.keycode==37){
        slide(-1);
    }else if(eventInfo.keycode==27){
        close();
    }
}
*/