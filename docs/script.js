function calcularTotal() {
    var ventas = document.querySelectorAll('.venta');
    var totalVentas = 0;

    ventas.forEach(function (venta) {
        var cantidad = parseInt(venta.getAttribute('data-cantidad')) || 0;
        totalVentas += cantidad;
    });

    document.getElementById('totalVentas').innerText = 'TOTAL: ' + totalVentas + ' VENTAS';
}

function agregarVenta() {
    var nombre = document.getElementById('nombre').value;
       // Verificar si se ha ingresado un nombre
       if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }
    var producto = document.getElementById('producto').value;

    // Verificar si el producto es "Inducción"
    if (producto === "0") {
        var venta = document.createElement('p');
        venta.innerText = nombre + ' (Inducción)';
        venta.setAttribute('data-cantidad', '');  // No se requiere cantidad
        venta.classList.add('venta');
    } else {
        var cantidad = parseInt(document.getElementById('cantidad').value);

        if (isNaN(cantidad) || cantidad < 1) {
            alert('Por favor, ingresa una cantidad válida mayor a 0.');
            return;  // Salir de la función si la cantidad no es válida
        }

        var venta = document.createElement('p');
        venta.innerText = nombre + ': ' + cantidad + ' ' + producto + ' para Instalación Urgente 💪✅';
        venta.setAttribute('data-cantidad', cantidad);
        venta.classList.add('venta');
    }

    document.getElementById('ventas').appendChild(venta);

    calcularTotal();
}
