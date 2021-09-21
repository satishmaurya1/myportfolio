const hamburger= document.querySelector(".hamburger")
const hamburger1= document.querySelector(".hamburger1")
const mobilenav= document.querySelector(".mobile-nav")
const logo = document.querySelector(".logo")


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