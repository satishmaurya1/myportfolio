const hamburger= document.querySelector(".hamburger")
const hamburger1= document.querySelector(".hamburger1")
const mobilenav= document.querySelector(".mobile-nav")
const logo = document.querySelector(".logo")

const projectitems=document.querySelectorAll(".item")
const radiobuttons=document.querySelectorAll("#radio")

hamburger.addEventListener("click",()=>{
    hamburger.style.display="none"
    logo.style.display="none"
    mobilenav.style.display="block"
   
    
    hamburger1.style.display="block"
    
})


hamburger1.addEventListener("click",()=>{
    hamburger.style.display="block"
    logo.style.display="block"
    mobilenav.style.display="none"
    hamburger1.style.display="none"
})


// -----------------------------------



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




setInterval(function(){
  
  showSlides(slideIndex += 1);


}, 2500);