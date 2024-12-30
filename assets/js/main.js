document.addEventListener("DOMContentLoaded", function () {
  // EDUCATION FILE LOAD
  fetch("./assets/json/education.json")
    .then((response) => response.json())
    .then((data) => {
      const educationContent = document.getElementById("education-content");
      data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("data-aos", "fade-right");
        box.innerHTML = `
                <div class="image">
                  <img draggable="false" src="${item.image}" alt="">
                </div>
                <div class="content">
                  <h3 class="body-title">${item.degree}</h3>
                  <p class="body-des">${item.institution}</p>
                  <h4 class="body-st">${item.year} | ${item.status} <i class="ri-checkbox-circle-fill"></i></h4>
                </div>
              `;
        educationContent.appendChild(box);
      });
    });

  // CERTIFICATE FILE LOAD
  fetch("/assets/json/certificate.json")
    .then((response) => response.json())
    .then((data) => {
      const certificateContent = document.getElementById("certificate-content");
      data.forEach((item) => {
        const certificateItem = document.createElement("div");
        certificateItem.classList.add("certificate-item");
        certificateItem.innerHTML = `
                <div class="certificate-icon">${item.icon}</div>
                <div class="certificate-details">
                  <div class="certificate-name">${item.name}</div>
                  <div class="certificate-issuer">${item.issuer}</div>
                  <div class="certificate-date">${item.date}</div>
                </div>
              `;
        certificateContent.appendChild(certificateItem);
      });
    });

  // PROJECTS FILE LOAD
  fetch("/assets/json/projects.json")
    .then((response) => response.json())
    .then((data) => {
      const projectsContent = document.getElementById("projects-content");
      data.forEach((item) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("data-aos", "fade-right");
        box.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="content">
                  <div class="tag">
                    <h3 class="body-st">${item.title}<br>- ${item.tech}</h3>
                  </div>
                  <div class="desc">
                    <p class="body-des">${item.description}</p>
                    <div class="btns">
                      <a href="${item.codeLink}" class="btn" id="code-btn">Code</a>
                      <a href="${item.demoLink}" class="btn" id="demo-btn">Demo</a>
                    </div>
                  </div>
                </div>
              `;
        projectsContent.appendChild(box);
      });
    });

  // SKILLSFILE LOAD
  fetch("/assets/json/skills.json")
    .then((response) => response.json())
    .then((data) => {
      const skillsContent = document.getElementById("skills-content");
      data.forEach((category) => {
        const skillCard = document.createElement("div");
        skillCard.classList.add("skill-card");
        skillCard.setAttribute("data-aos", "fade-right");
        skillCard.innerHTML = `
                <div class="skill-card-top gradient-gold">
                  <div class="skill-card-icon">
                    <i class="fa fa-user"></i>
                  </div>
                </div>
                <div class="skill-card-content">
                  <h4 class="skill-card-title">${category.category}</h4>
                  <p><strong>${category.quote}</strong><br><span>— ${
          category.author
        }</span></p>
                </div>
                <div class="skill-card-overlay slider">
                  <div class="skill-container">
                    ${category.skills
                      .map(
                        (skill) => `
                      <div class="bar top ${skill.level}" data-skill="${skill.name}"></div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              `;
        skillsContent.appendChild(skillCard);
      });
    });

  // EXPERIENCE FILE LOAD
  fetch("/assets/json/experience.json")
    .then((response) => response.json())
    .then((data) => {
      const experienceContent = document.getElementById("experience-content");
      data.forEach((item, index) => {
        const container = document.createElement("div");
        container.classList.add(
          "container",
          index % 2 === 0 ? "right" : "left"
        );
        container.setAttribute("data-aos", "fade-down");
        container.innerHTML = `
                <div class="content" data-aos="fade-down">
                  <div class="tag" data-aos="fade-down">
                    <h2 class="body-tit" data-aos="fade-down">${item.title}</h2>
                  </div>
                  <div class="desc" data-aos="fade-down">
                    <h3 class="content-des" data-aos="fade-down">${item.description}</h3>
                    <p class="content-st">${item.date} <i class="${item.icon}"></i></p>
                  </div>
                </div>
              `;
        experienceContent.appendChild(container);
      });
    });
});

// IMAGE CHANGE
document.addEventListener("DOMContentLoaded", function () {
  const images = [
  "/assets/img/images/Nari2.jpg",
  "/assets/img/images/Nari3.jpg",
  "/assets/img/images/Nari5.jpg",
  "/assets/img/images/Nari6.JPG"
  ];
  let currentIndex = 0;
  const imgElement = document.getElementById("about-img");

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }, 3000);
});
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
