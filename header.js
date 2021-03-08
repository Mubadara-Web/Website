setInterval (changeck,2000);
var repeat=1;

function changeck(){
  
    document.querySelector(".header_wrapper").style.animation="chbackground  10s infinite ease-in-out";
    document.querySelector(".bks--blue").nextElementSibling.classList.toggle("bks--blue");
    document.querySelector(".bks--blue").classList.toggle("bks--blue");
    console.log(repeat);
    repeat++;
    
   
}