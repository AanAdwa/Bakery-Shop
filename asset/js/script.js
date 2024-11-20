const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".nav-list");

menuToggle.onclick = () => {
    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");
};
