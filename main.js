var loader = document.getElementById("preloader");

function settingtoggle() {
  document
    .getElementById("setting-container")
    .classList.toggle("settingactivate"),
    document
      .getElementById("visualmodetogglebuttoncontainer")
      .classList.toggle("visualmodeshow");
}
function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});


let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.toggle("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.toggle("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.toggle("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document
      .getElementById("mobiletogglemenu")
      .classList.remove("show-toggle-menu"),
    document
      .getElementById("burger-bar1")
      .classList.remove("hamburger-animation1"),
    document
      .getElementById("burger-bar2")
      .classList.remove("hamburger-animation2"),
    document
      .getElementById("burger-bar3")
      .classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
  );
window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach((t) => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"));
  }),
    mobilenavLi.forEach((t) => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab");
    }),
    navLi.forEach((t) => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab");
    });

  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-vertical");
  } else {
    navbar.classList.remove("navbar-vertical");
  }
}),
  console.log(
    "%c Designed and Developed by Anuj Kumar Yadav ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
  );

let mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
    ? (mybutton.style.display = "block")
    : (mybutton.style.display = "none");
}

function scrolltoTopfunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
(window.onscroll = function () {
  scrollFunction();
}),
  document.addEventListener(
    "contextmenu",
    function (e) {
      "IMG" === e.target.nodeName && e.preventDefault();
    },
    !1
  );

const projectsData = [
  {
    "title": "PathShala",
    "description": "Library Management System designed to ease the process of borrowing and managing books. The platform allows users to view available books, issue or return them, and track due dates with ease.",
    "favicon": "src/webp/pexelicon-favicon.webp",
    "image": "src/webp/pathshalalib.webp",
    "github": "https://github.com/anujky576/library",
    "live": null,
    "techStack": ["Flask", "Python", "MySQL", "HTML", "CSS", "Bootstrap"],
    "useCase": "Used by students and librarians to manage book inventory, issue/return process, and due date tracking efficiently."
  },
  {
    "title": "Weather App",
    "description": "The Weather App is a user-friendly application that provides real-time weather updates for any location.",
    "favicon": "src/svg/aquaregia-favicon.svg",
    "image": "src/webp/weatherapp.webp",
    "github": "https://github.com/anujky576/Weather",
    "live": "https://weather-ten-alpha.vercel.app/",
    "techStack": ["ReactJS", "OpenWeatherMap API", "CSS"],
    "useCase": "Anyone can check current weather and forecasts for any city worldwide."
  },
  {
    "title": "Password Generator",
    "description": "The Password Generator is a simple yet powerful tool designed to create strong, secure, and customizable passwords.",
    "favicon": "src/webp/qr-favicon.webp",
    "image": "src/webp/password.webp",
    "github": "https://github.com/anujky576/PasswordGen",
    "live": "https://pass-gen-ten.vercel.app/",
    "techStack": ["ReactJS", "JavaScript", "CSS"],
    "useCase": "Users can generate secure passwords for their online accounts."
  },
  {
    "title": "NewsMonkey",
    "description": "NewsMonkey is a modern news application that delivers the latest headlines across various categories like politics, technology, sports, entertainment, and more.",
    "favicon": "src/webp/newsmonkeyfav.webp",
    "image": "src/webp/newsmonkey.webp",
    "github": "https://github.com/anujky576/Newsmonkey",
    "live": null,
    "techStack": ["ReactJS", "NewsAPI", "Bootstrap"],
    "useCase": "Stay updated with the latest news from multiple categories in one place."
  }
];

function renderProjects(projects) {
  const container = document.getElementById('project-boxes-div');
  container.innerHTML = projects.map((project, idx) => `
    <div data-aos="fade-up" class="project-box-wrapper">
      <div class="project-box">
        <div class="info-div">
          <img src="${project.favicon}" alt="${project.title} favicon" class="faviconforProject" />
          <article class="ProjectHeading">${project.title}</article>
          <p class="ProjectDescription">${project.description}</p>
          <div class="project-buttons">
            <a href="${project.github}" target="_blank" class="github-redirect" aria-label="Visit ${project.title} on GitHub">
              <img src="src/svg/github.svg" alt="github redirect button" />
            </a>
            ${project.live ? `
            <a href="${project.live}" target="_blank" class="cta" aria-label="Visit ${project.title} live">
              <span>Live view</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
            ` : ''}
            <button class="cta" style="margin-left:10px;" onclick="showProjectModal(${idx})" aria-label="View details of ${project.title}">
              <span>Details</span>
            </button>
          </div>
        </div>
        <div class="image-div">
          <img src="${project.image}" alt="${project.title} website preview image" />
        </div>
      </div>
    </div>
  `).join('');
}

function showProjectModal(idx) {
  const project = projectsData[idx];
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-body');
  body.innerHTML = `
    <div style="display:flex;gap:32px;align-items:flex-start;flex-wrap:wrap;">
      <div style="flex:1;min-width:220px;">
        <img src="${project.image}" alt="${project.title} preview" style="width:100%;border-radius:10px;box-shadow:0 2px 16px #0003;">
      </div>
      <div style="flex:1.2;min-width:260px;">
        <div style="display:flex;align-items:center;gap:16px;">
          <img src="${project.favicon}" alt="${project.title} favicon" style="width:40px;height:40px;border-radius:8px;">
          <h2 style="margin:0;font-size:2rem;">${project.title}</h2>
        </div>
        <p style="font-size:1.2rem;margin:18px 0 8px 0;">${project.description}</p>
        <div style="margin-bottom:10px;">
          <strong>Tech Stack:</strong>
          <ul style="margin:6px 0 0 18px;padding:0;font-size:1rem;">
            ${project.techStack ? project.techStack.map(tech => `<li>${tech}</li>`).join('') : '<li>N/A</li>'}
          </ul>
        </div>
        <div style="margin-bottom:10px;">
          <strong>Use Case:</strong>
          <p style="margin:4px 0 0 0;font-size:1rem;">${project.useCase || 'N/A'}</p>
        </div>
        <div style="margin-top:18px;display:flex;gap:16px;">
          <a href="${project.github}" target="_blank" class="cta" style="text-decoration:none;">
            <span>GitHub</span>
          </a>
          ${project.live ? `<a href="${project.live}" target="_blank" class="cta" style="text-decoration:none;"><span>Live Demo</span></a>` : ''}
        </div>
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}


function openURL() {
  var url = "src/pdf/anujresume.pdf";

  window.open(url, "_blank");
}
  
const cursorInner = document.getElementById("cursor-inner");
const cursorOuter = document.getElementById("cursor-outer");
const links = document.querySelectorAll("a,label,button");

document.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorInner.style.left = `${posX}px`;
  cursorInner.style.top = `${posY}px`;
  cursorOuter.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursorInner.classList.add("hover");
      cursorOuter.classList.add("hover");
    });
    link.addEventListener("mouseleave", () => {
      cursorInner.classList.remove("hover");
      cursorOuter.classList.remove("hover");
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
renderProjects(projectsData);

document.getElementById('project-modal-close').onclick = function() {
document.getElementById('project-modal').style.display = 'none';
};
window.onclick = function(event) {
const modal = document.getElementById('project-modal');
if (event.target === modal) {
  modal.style.display = 'none';
}
};
});

document.addEventListener('DOMContentLoaded', function () {
  const nameInput = document.getElementById('contact-name');
  const messageInput = document.getElementById('message');
  const phoneInput = document.getElementById('phone');

  // Allow only letters and spaces for name/message, up to 100 characters
  function allowOnlyLetters(e) {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    if (value.length > 100) value = value.slice(0, 100);
    e.target.value = value;
  }

  // Allow only digits for phone, up to 10 characters
  function allowOnlyDigits(e) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    if (value.length > 10) value = value.slice(0, 10);
    e.target.value = value;
  }

  nameInput.addEventListener('input', allowOnlyLetters);
  messageInput.addEventListener('input', allowOnlyLetters);
  if (phoneInput) phoneInput.addEventListener('input', allowOnlyDigits);
});