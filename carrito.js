const btnAbrirCarrito=
document.querySelector("#btn-abrir-carrito");
const btnCerrarCarrito=
document.querySelector("#btn-cerrar-carrito");
const carrito=
document.querySelector("#carrito");

btnAbrirCarrito.addEventListener("click",()=>{
    carrito.showCarito();
})

btnCerrarCarrito.addEventListener("click",()=>{
    carrito.close();
})
