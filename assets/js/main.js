/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Get all sections with an ID
const sections = document.querySelectorAll("section[id]");

// Function to add active link on scroll
const scrollActive = () => {
  // Get the scroll position
  const scrollDown = window.scrollY;

  // Loop through each section
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight, // Get the section's height
      sectionTop = current.offsetTop - 58, // Adjust the offset for the navbar height
      sectionId = current.getAttribute("id"), // Get the section's ID
      sectionsClass = document.querySelector(
        '.nav-menu a[href="#' + sectionId + '"]'
      ); // Select the corresponding navigation link 

    // Check if the section is in view
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Add active class to the link
      sectionsClass.classList.add("active-link");
    } else {
      // Remove active class from the link
      sectionsClass.classList.remove("active-link");
    }
  });
};

// Add event listener on scroll to trigger the function
window.addEventListener("scroll", scrollActive);

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===== COTACT FORM =====*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

/*=============== EDUCATIONCERTIFICATE ===============*/
function edu() {
  document.getElementById("edu").style.display = "block";
  document.getElementById("cer").style.display = "none";
  setActiveButton("eduButton");
}

function cer() {
  document.getElementById("edu").style.display = "none";
  document.getElementById("cer").style.display = "block";
  setActiveButton("cerButton");
}

function setActiveButton(buttonId) {
  document.getElementById("eduButton").classList.remove("active");
  document.getElementById("cerButton").classList.remove("active");
  document.getElementById(buttonId).classList.add("active");
}

/*=============== AGE CALCULATE ===============*/
const birthdate = new Date("2002-05-26");
function calculateAge(birthdate) {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}
document.getElementById("age").textContent = calculateAge(birthdate);

/*=============== SHOW SCROLL UP ===============*/
var typed = new Typed(".typing-text", {
  strings: ["Full-Stack Developer", "Freelancer", "Tech Enthusiast"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== SWIPER POPULAR ===============*/
const swiperPopular = new Swiper(".popular-swiper", {
  grabCursor: true,
  centeredSlides: "auto",
  slidesPerView: "auto",
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
