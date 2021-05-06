//Eventos para filtrar por marca, precio y nombre

$("#marcasUno").on("click", () => filtrarMarcas("Apple"))

$("#marcasDos").on("click", () => filtrarMarcas("Samsung"))

$("#marcasTres").on("click", () => filtrarMarcas("Sony"))

$("#marcasCuatro").on("click", () => filtrarMarcas("Todas"))

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
