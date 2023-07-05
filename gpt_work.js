// Add active class to the current navigation item
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    navLinks.forEach(link => link.classList.remove("active"));
    e.target.
