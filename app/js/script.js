/***************************
Dom references
***************************/

// For nav
const openMenuBtn = document.getElementById("burger");
const closeMenuBtn = document.getElementById("closeMenu");
const menuControls = document.getElementById("menuControls");
const nav = document.getElementById("nav");

/***************************
Navbar Logic
***************************/
openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
  nav.classList.add("open");
  menuControls.classList.add("open");
}
function closeMenu() {
  nav.classList.remove("open");
  menuControls.classList.remove("open");
}
