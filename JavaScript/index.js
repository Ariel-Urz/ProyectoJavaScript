const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')



let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

/*----- Boton vaciar carrito con libreria sweet alert*/
botonVaciar.addEventListener('click', () => {
        Swal.fire({
          title: "Desea vaciar carrito?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí",
          cancelButtonText: "No",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Exitosamente",
              icon: "success",
              text: "Los productos del carrito se han eliminado",
            });
            carrito.length = 0
            actualizarCarrito()
            localStorage.setItem('carrito', JSON.stringify(carrito))
          }
        });
})

//Crea productos en el html
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto', producto.tipo, producto.marca, "hide")
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Marca: ${producto.marca}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
   
    contenedorProductos.appendChild(div)
    

    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener



    //esta funcion ejecuta el agregar el carrito con la id del producto  ------------- con libreria sweet alert
    boton.addEventListener('click', () => {
        
        Swal.fire({
            title: `${producto.nombre}`,
            text: 'Agregado al carrito',
            imageUrl: `${producto.img}`,
            imageWidth: 100,
            imageHeight: 150,
            imageAlt: 'Custom image',
          })
        agregarAlCarrito(producto.id)
        
    })
})


//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    // AUMENTAR LA CANTIDAD 
    const existe = carrito.some (prod => prod.id === prodId) 

    //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })

        //EN CASO DE QUE NO ESTÉ, AGREGAMOS AL CARRITO
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    //MODIFICA EL CARRITO
    actualizarCarrito() 
    
}


//ELIMINAR LOS PRODUCTOS DEL CARRITO  -------- con libreria sweet alert
const eliminarDelCarrito = (prodId) => {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Producto Elminado',
        showConfirmButton: false,
        timer: 2500
      })
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1) 
     
    actualizarCarrito()
    
    localStorage.setItem('carrito', JSON.stringify(carrito))
    
    /*console.log(carrito)*/
}

//AGREGAMOS AL MODAL LOS PRODUC Y SUMAMOS
const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach((prod) => {
        const div = document.createElement('section')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 
    
   
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    
}


//FILTRAR PRODUCTOS POR BOTON
function filterProduct(value) {

    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {

        if (value.toUpperCase() == button.innerText.toUpperCase()){

            button.classList.add("active");
        }

        else {
            button.classList.remove("active");
        }
    });


let elements = document.querySelectorAll("div");

elements.forEach((element) => {

    if (value == "Todo"){

        element.classList.remove("hide");
    }

    else {
        
        if (element.classList.contains(value)) {
          
          element.classList.remove("hide");
        } else {
          
          element.classList.add("hide");
        }
      }
  
});

}


//PAGAR POR  MERCADO PAGO

const pagar = async () => {

  const productosToMap = carrito.map(Element => {
      let nuevoElemento = 
      {
          title: Element.nombre,
          description: Element.desc,
          picture_url: Element.img,
          category_id: Element.tipo,
          quantity: Element.cantidad,
          currency_id: "ARS",
          unit_price: Element.precio
      }
      return nuevoElemento
  })
  let response = await fetch("https://api.mercadopago.com/checkout/preferences", {

      method: "POST",
      headers: {
          Authorization: "Bearer TEST-3257792801050246-062013-10b38680290bc19f6e9d7e8a32a319c3-420650636"
      },
      body: JSON.stringify({
          items: productosToMap
      })
  })
  let data = await response.json()
  console.log(data)
  window.open(data.init_point, "_blank")
}


window.onload = () => {
    filterProduct("Todo");
};

