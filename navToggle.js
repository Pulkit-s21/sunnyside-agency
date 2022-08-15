const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

// Intersection variables
const header = document.querySelector(".primary-header");
const creative = document.querySelector(".creative");

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