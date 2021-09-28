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


// -------------carosol ----------------------


const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
