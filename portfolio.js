
let header=document.querySelector("header");
let menu =document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0);

})

menu.onclick=()=>{
    navbar.classList.toggle("active");
};
window.onscroll = () =>{
    navbar.classList.remove("active");
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 100,
//     reset: true
});

sr.reveal('.home,.about-text,.timeline-items,.skill-container,.project-box,.contact',{}); 
sr.reveal('.home-text,.about-text,.timeline-items,.skill-container,.project-box,.contact-form',{delay: 200}); 
sr.reveal('.social,.contact-form',{ interval: 200}); 
sr.reveal('.skill-container,.contact-form',{interval: 100});