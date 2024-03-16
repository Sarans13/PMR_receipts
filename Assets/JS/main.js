/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== FAQ CARDS ===============*/
// Get all the FAQ cards
const faqCards = document.querySelectorAll('.faq__card');

// Iterate through each FAQ card and add click event listener
faqCards.forEach(card => {
    const title = card.querySelector('.faq__card__title');
    const description = card.querySelector('.faq__card__description');

    title.addEventListener('click', () => {
        // Toggle the visibility of the description
        description.classList.toggle('show');
    });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    // delay: 300,
    reset: true
})

sr.reveal(`.land__image`);
sr.reveal(`.land__data`);
sr.reveal(`.aboutUs__container`);
sr.reveal(`.invoiceGenerator__container`);
sr.reveal(`.faq__container`);
sr.reveal(`.pricing__container`);

/*================== ACTIVE NAV BAR CONTROLLER =============== */
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".nav__item");
    const loginNavItem = document.querySelector(".nav__item.active");
  
    navItems.forEach(function(navItem) {
      navItem.addEventListener("mouseover", function() {
        // Remove active class from all nav__items
        navItems.forEach(function(item) {
          item.classList.remove("active");
        });
        
        // Add active class to the hovered nav__item
        navItem.classList.add("active");
      });
    });
  
    // Add event listener to the nav__list
    const navList = document.querySelector(".nav__list");
    navList.addEventListener("mouseleave", function() {
      // Remove active class from all nav__items
      navItems.forEach(function(item) {
        item.classList.remove("active");
      });
      
      // Add active class to the login nav__item
      loginNavItem.classList.add("active");
    });
  });
  