const nav = document.querySelector(".navbar");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const items = document.querySelectorAll(".servicesBtn > .item");

fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".navbar-section").innerHTML = data;
    const cross = document.querySelector(".cross-icon");
    const menu = document.querySelector(".menu-icon");
    menu.addEventListener("click", showMenu);
    cross.addEventListener("click", hideMenu);

    function showMenu() {
      console.log("ok");
      menu.classList.add("vanish");
      document
        .querySelector(".hamburger-menu-expand")
        .classList.remove("vanish");
    }
    function hideMenu() {
      menu.classList.remove("vanish");
      document.querySelector(".hamburger-menu-expand").classList.add("vanish");
    }
  });
fetch("contacts.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(".contact-section").innerHTML = data;
  });

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  scrollToTopBtn.classList.remove("showTopbtn");
}
scrollToTopBtn.addEventListener("click", scrollToTop);
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    scrollToTopBtn.classList.add("showTopbtn");
  }
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      items.forEach((e) => {
        e.classList.remove("active");
      });
      item.classList.toggle("active");
      console.log("ok");
    }
  });
});
