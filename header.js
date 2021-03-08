var changeBki=setInterval (changeck,5000);
var repeat=1;
var nummberOfBkgc=1;

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

function changeBk(BG){
    clearInterval(changeBki);
    switch(BG){
        case 1: 
            console.log(BG);
        case 2:
            document.querySelector(".bks--blue").classList.toggle("bks--blue");
            document.querySelector("#span2").classList.toggle("bks--blue");
            document.querySelector(".header_wrapper").style.backgroundImage="url(\"Muster/Header\ Backgrounds/2.jpg\")"
            document.querySelector(".header_wrapper").style.animation="chbackground2  5s 5s forwards ease-in-out";
            setTimeout(next,5000);
            setInterval(changeBki,5000);
    }
}

function next(){
    document.querySelector(".bks--blue").nextElementSibling.classList.toggle("bks--blue");
    document.querySelector(".bks--blue").classList.toggle("bks--blue");
}