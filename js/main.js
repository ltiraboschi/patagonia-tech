let valorCarritoStorage = localStorage.carrito;
let carrito = [];

//Revisar el local storage

if (valorCarritoStorage == null) {
  carrito = [];
  $("#numeroCarrito").html(carrito.length);
} else {
  carrito = JSON.parse(valorCarritoStorage);
}

//Creación de cards de productos
let acumuladorCardsHome = ``;
let productos = sortearProductosPorId();

function renderearCards() {
  for (let i = 0; i < productos.length; i++) {
    acumuladorCardsHome += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top imgProductos" src="${productos[i].imagen
      }" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#">${productos[i].nombre}</a>
    </h4>
    <h5> ${productos[i].precio.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
      })}</h5>
    <p class="card-text">${productos[i].descripcion}</p>
    </div>
      <div class="card-footer">
    <button class="btnComprar" onclick='agregarCarrito(${JSON.stringify(
        productos[i].id
      )})'>Agregar al carrito</button>
    </div>
    </div>
    </div>`;
  }
  $("#productos").html(acumuladorCardsHome);
}
renderearCards();

//Funciones para agregar y eliminar productos del carrito

function agregarCarrito(productoId) {
  let itemEnCarrito = carrito.find((producto) => producto.id == productoId);
  if (itemEnCarrito) {
    itemEnCarrito.cantidad += 1;
  } else {
    let { id, nombre, imagen, precio } = productos.find(
      (producto) => producto.id == productoId
    );
    carrito.push({
      id: id,
      nombre: nombre,
      imagen: imagen,
      precio: precio,
      cantidad: 1,
    });
  }
  localStorage.carrito = JSON.stringify(carrito);
  popUpCarrito();
}

function eliminarProducto(itemId) {
  let productoAEliminar = carrito.find((producto) => producto.id == itemId);
  if (productoAEliminar) {
    productoAEliminar.cantidad--;
    if (productoAEliminar.cantidad == 0) {
      let indice = carrito.indexOf(productoAEliminar);
      carrito.splice(indice, 1);
    }
  }
  localStorage.carrito = JSON.stringify(carrito);
  popUpCarrito();
}

function validarStock(stock) {
  return stock > 0;
}

function popUpCarrito() {
  let productosEnCarrito = "";
  let totalCarrito = 0;

  if (carrito.length >= 1) {
    document.getElementById(
      "avanzar"
    ).innerHTML = `<a href="formulario.html">
   <button class="avanzar">Avanzar con la compra</button></a>`;
    document.getElementById(
      "vaciarCarrito"
    ).innerHTML = `<button onclick='vaciarCarrito()' class="vaciarCarrito">Vaciar carrito</button>`;
  } else if (carrito.length < 1) {
    document.getElementById("avanzar").innerHTML = ``;
    document.getElementById("vaciarCarrito").innerHTML = ``;
  }
  for (let i = 0; i < carrito.length; i++) {
    productosEnCarrito += `<div class="card border-success dropdown-item">
    <div class="card-header titulo-card">
      <div class="fotoYTexto">
        <a href="#"
          ><img
            class="card-img-top imgCarrito"
            src="${carrito[i].imagen}"
            alt=""
        /></a>
        <div class="nombreCarrito">${carrito[i].nombre}</div>
      </div>
      <div
        class="eliminarTop btn btn-danger"
        onclick="eliminarProducto(${JSON.stringify(carrito[i].id)})"
      >
        Eliminar
      </div>
    </div>
    <div class="card-body text-primary">
      <h5 class="card-title">
        Precio x unidad ${carrito[i].precio.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    })}
      </h5>
    </div>
    <div class="cantidad">Cantidad: ${carrito[i].cantidad}</div>
  </div>
    `;

    totalCarrito += carrito[i].precio * carrito[i].cantidad;
  }

  //Jquery al HTML
  $("#productosCarrito").html(productosEnCarrito);
  $("#numeroCarrito").html(
    carrito.reduce((acc, producto) => (acc += producto.cantidad), 0)
  );
  $("#precioTotal").html(
    `El total de tu compra es de ${totalCarrito.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    })}`
  );
  $("#textoTotalCarrito").html(`Total: ${totalCarrito.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  })}`
  );
}
popUpCarrito();

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  popUpCarrito();
}
