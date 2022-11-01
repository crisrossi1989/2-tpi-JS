const precioTicket = 200
let cantidadTickets = document.getElementById('cantidadTickets')
let categoriaDescuento = document.getElementById('categoriaDescuento')
let totalTickets = document.querySelector('#totalTickets')

function resumen() {
    const precioTicket = 200
    let cantidadTickets = document.getElementById('cantidadTickets')
    let categoriaDescuento = document.getElementById('categoriaDescuento')
    let totalTickets = document.querySelector('#totalTickets')
    totalTickets.innerHTML= "Total a Pagar: $ " + (cantidadTickets.value * precioTicket * categoriaDescuento.value)
}
    function borrar() {   
        let totalTickets = document.querySelector('#totalTickets')
        totalTickets.innerHTML= "Total a Pagar: $ "
    }