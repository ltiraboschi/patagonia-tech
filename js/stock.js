//Construcción de productos

class Producto {
  constructor(id, nombre, precio, imagen, descripcion, marca, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.marca = marca;
    this.stock = stock;
  }

  agregarStock = (cantidad) => {
    this.stock += cantidad;
  };

  restarStock() {
    this.stock -= 1;
  }
}

const productosRaw = [];

productosRaw.push(
  new Producto(
    1,
    "Sony PS5",
    130000,
    "imagenes/ps5.png",
    "La PS5 es pura potencia. Los mejores juegos en calidad 4K.",
    "Sony",
    40
  )
);
productosRaw.push(
  new Producto(
    2,
    "Nintendo Switch ",
    100000,
    "imagenes/switch.jpg",
    "La consola que revolucionó el gaming. Con la Nintendo Switch jugá en tu casa, o donde quieras.",
    "Xiaomi",
    20
  )
);
productosRaw.push(
  new Producto(
    3,
    "Motorola G7",
    20000,
    "imagenes/motog7.jpg",
    "El Moto G7 es el teléfono ideal para quienes quieran un gran teléfono a bajo precio.",
    "Xiaomi",
    40
  )
);
productosRaw.push(
  new Producto(
    4,
    "Samsung S10",
    180000,
    "imagenes/samsungS8.jpg",
    "El Galaxy S10 tiene una pantalla de 6.1 pulgadas, y cuenta con el procesador Exynos 9820 de ocho núcleos con 8GB de RAM y 128GB.",
    "Samsung",
    40
  )
);
productosRaw.push(
  new Producto(
    5,
    "iPad Mini",
    90000,
    "imagenes/ipadmini.jpg",
    "El iPad mini tiene el chip A12 Bionic y pantalla Retina de 7.9 pulgadas en un diseño compacto.",
    "Apple",
    40
  )
);
productosRaw.push(
  new Producto(
    6,
    "iPhone 11",
    150000,
    "imagenes/iphone8.png",
    "El iPhone 11 Pro tiene un revolucionario sistema de tres cámaras que multiplica tu capacidad creativa y es fácil de usar.",
    "Apple",
    11
  )
);
productosRaw.push(
  new Producto(
    7,
    "Monitor Samsung F35",
    32000,
    "imagenes/samsungf350.jpg",
    "Monitor FHD de 22' con diseño ultra fino y ángulo de visión amplia de 178 grados.",
    "Dell",
    15
  )
);
productosRaw.push(
  new Producto(
    8,
    "Sony PS4",
    45000,
    "imagenes/ps4.jpg",
    "La consola más vendida de su generación .",
    "Sony",
    12
  )
);
productosRaw.push(
  new Producto(
    9,
    "Macbook Pro",
    205000,
    "imagenes/macbookpro.jpg",
    "La MacBook Pro es la notebook más poderosa de Apple, creada para quienes se proponen nuevos desafíos y logran cosas imposibles.",
    "Apple",
    8
  )
);
productosRaw.push(
  new Producto(
    10,
    "Cámara Sony H30",
    52000,
    "imagenes/sonyh30.jpg",
    "La mejor calidad de imagen con la facilidad de uso de una cámara compacta.",
    "Sony",
    10
  )
);
productosRaw.push(
  new Producto(
    11,
    "Samsung Tab S2",
    49000,
    "imagenes/samsungtab.png",
    "Ofrece intensidad cinematográfica, detalles y un contraste profundo a una pantalla que cabe en tus manos",
    "Samsung",
    6
  )
);
productosRaw.push(
  new Producto(
    12,
    "Chromecast",
    14000,
    "imagenes/chromecast.png",
    "Un dispositivo de streaming práctico y económico.",
    "Google",
    3
  )
);

//Funciones para filtrar por marca y por precio o nombre

function filtrarMarcas(marca) {
  if (marca !== "Todas") {
    productos = productosRaw;
    productos = productos.filter((elemento) => elemento.marca.includes(marca));
  } else {
    productos = sortearProductosPorId()
  }
  renderearCards();
}

function sortCards(sortType) {
  if (sortType === "Caros") {
    productos = [
      ...productos.sort(function (a, b) {
        return b.precio - a.precio;
      }),
    ];
  } else if (sortType === "Baratos") {
    productos = [
      ...productos.sort(function (a, b) {
        return a.precio - b.precio;
      }),
    ];
  } else if (sortType === "Nombre") {
    productos = [
      ...productos.sort(function (a, b) {
        if (a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
          return 1;
        }
        if (a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
          return -1;
        }
        return 0;
      }),
    ];
  } else if (sortType === "Borrar") {
    productos = [
      ...productosRaw.sort(function (a, b) {
        return a.id - b.id;
      }),
    ];
  }
  renderearCards();
}

const sortearProductosPorId = () => [
  ...productosRaw.sort(function (a, b) {
    return a.id - b.id;
  }),
];
