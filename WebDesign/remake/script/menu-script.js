/* ejecutar funcion en el evento click */
document.getElementById("btn__open").addEventListener("click", open_close_menu);
/* variables */
let side_menu = document.getElementById("menu__side");
let btn_open = document.getElementById("btn__open");
let body = document.getElementById("body");

/* evento para mostrar y ocultar menu */
function open_close_menu() {
  body.classList.toggle("body_movement");
  side_menu.classList.toggle("menu__side--movement");
}

/* Si el ancho de la pagina es menor a 760px, ocultará el menu al recargar la pagina */

if (window.innerWidth < 760) {
  body.classList.add("body_movement");
  side_menu.classList.add("menu__side--movement");
}

/* haciendo el menu responsive */

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 760) {
    body.classList.remove("body_movement");
    side_menu.classList.remove("menu__side--movement");
  }
  if (this.window.innerWidth < 760) {
    body.classList.add("body_movement");
    side_menu.classList.add("menu__side--movement");
  }
});
