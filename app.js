const menu = document.querySelector(".menu-icon");
const cross = document.querySelector(".cross-icon");
const nav = document.querySelector(".navbar");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const slides = document.querySelectorAll(".photo-auto-play > img");
const intervalTime = 2000;
let currentSlide = 0;

fetch("contacts.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".contact-section").innerHTML = data;
  });

$(window).scroll(function () {
  if ($(window).scrollTop()) {
    $(nav).addClass("scrolled");
    $(scrollToTopBtn).addClass("showTopbtn");
  } else {
    $(nav).removeClass("scrolled");
    $(scrollToTopBtn).removeClass("showTopbtn");
  }
});

menu.addEventListener("click", showMenu);
cross.addEventListener("click", hideMenu);

function showMenu() {
  console.log("ok");
  menu.classList.add("vanish");
  document.querySelector(".hamburger-menu-expand").classList.remove("vanish");
}
function hideMenu() {
  menu.classList.remove("vanish");
  document.querySelector(".hamburger-menu-expand").classList.add("vanish");
}

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } else if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

function autoChangeSlide() {
  changeSlide(1);
}

showSlide(currentSlide);

const intervalId = setInterval(autoChangeSlide, intervalTime);

document.querySelector(".prev-btn").addEventListener("click", () => {
  const previousSlide = currentSlide;
  changeSlide(-1);
  currentSlide = previousSlide;
});

document.querySelector(".next-btn").addEventListener("click", () => {
  const previousSlide = currentSlide;
  changeSlide(1);
  currentSlide = previousSlide;
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
