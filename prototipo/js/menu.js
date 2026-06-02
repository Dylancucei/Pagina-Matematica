const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

/* ABRIR MENÚ */
document
    .getElementById("menu-btn")
    .addEventListener("click", toggleMenu);

/* CERRAR MENÚ */
document
    .getElementById("close-btn")
    .addEventListener("click", toggleMenu);

/* CERRAR CON OVERLAY */
overlay.addEventListener("click", toggleMenu);