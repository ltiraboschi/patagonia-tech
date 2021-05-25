//Eventos para filtrar por marca, precio y nombre

$("#Apple").on("click" , (e) =>{
    e.preventDefault()
    filtrarMarcas("Apple")
})
$("#Samsung").on("click", (e) => {
    e.preventDefault()
    filtrarMarcas("Samsung")})

$("#Sony").on("click", (e) => {
    e.preventDefault()
    filtrarMarcas("Sony")})

$("#Todas").on("click", (e) =>{
    e.preventDefault()
    filtrarMarcas("Todas")
})

$("#sortCaros").on("click", () => sortCards("Caros"))
$("#sortBaratos").on("click", () => sortCards("Baratos"))
$("#sortNombre").on("click", () => sortCards("Nombre"))
$("#sortBorrar").on("click", () => sortCards("Borrar"))




//Eventos del modal


$("#icono-carrito").on("click", () => {
    $(".modal-contenedor").toggleClass("modal-active");
});

$("#carritoCerrar").on("click", () => {
    $(".modal-contenedor").toggleClass("modal-active");
});

$(".modal-carrito").on("click",  (e) => {
    e.stopPropagation();
});

$(".modal-contenedor").on("click",  () => {
    carritoCerrar.click();
});


