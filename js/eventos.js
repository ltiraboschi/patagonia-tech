//Eventos para filtrar por marca, precio y nombre

// $("#Apple").on("click", () => filtrarMarcas("Apple"))
// $(`${marca}`).on("click", () => filtrarMarcas(marca))

$("#Samsung").on("click", () => filtrarMarcas("Samsung"))

$("#Sony").on("click", () => filtrarMarcas("Sony"))

$("#Todas").on("click", () => filtrarMarcas("Todas"))

$("#sortCaros").on("click", () => sortCards("Caros"))

$("#sortBaratos").on("click", () => sortCards("Baratos"))

$("#sortNombre").on("click", () => sortCards("Nombre"))

$("#sortBorrar").on("click", () => sortCards("Borrar"))


//Eventos del modal

const carritoAbrir = document.getElementById("icono-carrito");
const carritoCerrar = document.getElementById("carritoCerrar");

const contenedorModal = document.getElementsByClassName("modal-contenedor")[0];
const modalCarrito = document.getElementsByClassName("modal-carrito")[0];

carritoAbrir.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active");
});
carritoCerrar.addEventListener("click", () => {
    contenedorModal.classList.toggle("modal-active");
});
modalCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
});

contenedorModal.addEventListener("click", () => {
    carritoCerrar.click();
});
