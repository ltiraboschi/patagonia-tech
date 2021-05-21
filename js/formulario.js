//Validar formulario, solo pasar al pago si está completo

function validar() {
        const forms = document.querySelectorAll('.needs-validation')
  
      Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
           else{
            event.preventDefault()
            event.stopPropagation()
            mercadoPago()
           }
          form.classList.add('was-validated')
        }, false)
      })
  }validar()

//API Mercado Pago
  async function mercadoPago() {
    const productosMP = carrito.map((element) => {
      let nuevoElemento = {
        title: element.nombre,
        picture_url: element.imagen,
        category_id: element.id,
        quantity: Number(element.cantidad),
        currency_id: "ARS",
        unit_price: Number(element.precio),
      };
      return nuevoElemento;
    });

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-3447450371918408-051923-94f74023a07a52dab35180bf62a90ed2-9504051",
        },
        body: JSON.stringify({
          items: productosMP,
        }),
      }
    );
    const data = await response.json();
    window.open(data.init_point, "_blank");
  }



  let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
]



const a = []
const b = 
const c =
const d =
const e= 