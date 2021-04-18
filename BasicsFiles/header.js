var changeBki=setInterval (changeck,5000);
var repeat=1;


function changeck(){
    if(repeat==3){
        document.querySelector(".bks--blue").classList.toggle("bks--blue");
        var BG_changer=  document.querySelector(".BG_changer").firstElementChild;
        console.log(BG_changer);
        BG_changer.classList.add("bks--blue");
        repeat=1;
        document.querySelector(".header_wrapper").style.animation="none";
    }
    else  {
        document.querySelector(".header_wrapper").style.animation="chbackground  12s forwards ease-in-out";
        document.querySelector(".bks--blue").nextElementSibling.classList.toggle("bks--blue");
        document.querySelector(".bks--blue").classList.toggle("bks--blue");
        repeat++;
    }
}


window.addEventListener("scroll",function (){
    const headerNavi=document.querySelector(".navigation");
    headerNavi.classList.toggle("navi_Scroll",window.scrollY>90);
})