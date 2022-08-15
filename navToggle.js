const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Intersection variables
const header = document.querySelector(".primary-header");
const creative = document.querySelector(".creative");

// Fading and sliding animation variables
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const creativeOptions = {
  rootMargin: "-50px 0px 0px 0px" // -50px cz we are scrolling down..px is needed and cant we vh or vw needs to be px
};

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});

const creativeObserver = new IntersectionObserver(function(entries,creativeObserver){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      header.classList.add("nav-scrolled");
    } else{
      header.classList.remove("nav-scrolled");
    }
  });
},creativeOptions);

creativeObserver.observe(creative);

// Fading and sliding observer
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll)
{
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add("appear");
      console.log(entry.target);
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader=>{
  appearOnScroll.observe(fader);
});

// using the appearOnScroll for sliding animation as well
sliders.forEach(slider=>{
  appearOnScroll.observe(slider);
});