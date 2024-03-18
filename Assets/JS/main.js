/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== FAQ CARDS ===============*/
// Get all the FAQ cards
const faqCards = document.querySelectorAll(".faq__card");

// Iterate through each FAQ card and add click event listener
faqCards.forEach((card) => {
  const title = card.querySelector(".faq__card__title");
  const description = card.querySelector(".faq__card__description");

  title.addEventListener("click", () => {
    // Toggle the visibility of the description
    description.classList.toggle("show");
  });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  // delay: 300,
  reset: true,
});

sr.reveal(`.land__image`);
sr.reveal(`.land__data`);
sr.reveal(`.aboutUs__container`);
sr.reveal(`.invoiceGenerator__container`);
sr.reveal(`.faq__container`);
sr.reveal(`.pricing__container`);

/*================== ACTIVE NAV BAR CONTROLLER =============== */
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav__item");
  const loginNavItem = document.querySelector(".nav__item.active");

  navItems.forEach(function (navItem) {
    navItem.addEventListener("mouseover", function () {
      // Remove active class from all nav__items
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the hovered nav__item
      navItem.classList.add("active");
    });
  });

  // Add event listener to the nav__list
  const navList = document.querySelector(".nav__list");
  navList.addEventListener("mouseleave", function () {
    navItems.forEach(function (item) {
      item.classList.remove("active");
    });
    loginNavItem.classList.add("active");
  });
});

//==============CLOSE THE VIP BUTTON=======================

document
  .getElementById("close__vip__message")
  .addEventListener("click", function () {
    document.getElementById("vip").style.display = "none";
  });

//====================RECIEPT MODAL======================
document.addEventListener("DOMContentLoaded", function () {
  //============ADD DECLARATIONS=====================
  const modal = document.getElementById("invoiceModal");
  const generateButtons = document.querySelectorAll(".invoice__button");
  const cards = document.querySelectorAll(".invoiceGenerator__card");
  const overlay = document.getElementById("overlay");

  //=============OPEN AND CLOSE MODAL===============
  function openModal() {
    modal.classList.add("visible");
    overlay.classList.add("visible");
  }

  function closeModal() {
    modal.classList.remove("visible");
    overlay.classList.remove("visible");
  }

  generateButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });

  document.addEventListener("click", function (event) {
    if (event.target.closest(".invoice__button")) {
      openModal();
    } else if (
      !modal.contains(event.target) ||
      event.target.closest(".close__invoice")
    ) {
      closeModal();
    }
  });

  //=========ADJUST THE MODAL POSITION=================

  const offset = 50; // Adjust this value as needed

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      modal.style.top = window.scrollY + offset + "px";
    });
  });
});
