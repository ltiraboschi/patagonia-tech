//Eventos para filtrar por marca, precio y nombre

const sortMarcaUno = document.getElementById('marcasUno');
const sortMarcaDos = document.getElementById('marcasDos');
const sortMarcaTres = document.getElementById('marcasTres');
const sortMarcaCuatro = document.getElementById('marcasCuatro');

sortMarcaUno.addEventListener('click', ()=> {
    filtrarMarcas('Apple')
})

sortMarcaDos.addEventListener('click', ()=> {
    filtrarMarcas('Samsung')
})

sortMarcaTres.addEventListener('click', ()=> {
    filtrarMarcas('Sony')
})

sortMarcaCuatro.addEventListener('click', ()=> {
    filtrarMarcas('Todas')
})


const sortCaros = document.getElementById('sortCaros')
const sortBaratos = document.getElementById('sortBaratos')
const sortNombre = document.getElementById('sortNombre')
const sortBorrar = document.getElementById('sortBorrar')


sortCaros.addEventListener('click', ()=> {
    sortCards('Caros')
})

sortBaratos.addEventListener('click', ()=> {
    sortCards('Baratos')
})

sortNombre.addEventListener('click', ()=> {
    sortCards('Nombre')
})

sortBorrar.addEventListener('click', ()=> {
    sortCards('Borrar')
})


//Eventos del modal

const carritoAbrir = document.getElementById('icono-carrito');
const carritoCerrar = document.getElementById('carritoCerrar');

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

carritoAbrir.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
carritoCerrar.addEventListener('click', ()=> {
    contenedorModal.classList.toggle('modal-active')
})
modalCarrito.addEventListener('click',(e)=>{
    e.stopPropagation()
})

contenedorModal.addEventListener('click', ()=>{
    carritoCerrar.click()
})