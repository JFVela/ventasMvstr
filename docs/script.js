function calcularTotal() {
    var ventas = document.querySelectorAll('.venta');
    var totalVentas = 0;
    var totalMigras = 0;

    ventas.forEach(function(venta) {
        var cantidad = parseInt(venta.getAttribute('data-cantidad')) || 0;
        totalVentas += cantidad;
        if (venta.innerText.includes("Migra")) {
            totalMigras++;
        }
    });

    var resumenText = '';

    if (totalVentas > 0 && totalMigras === 0) {
        resumenText = 'TOTAL: ' + totalVentas + ' VENTAS';
    } else if (totalVentas === 0 && totalMigras > 0) {
        resumenText = 'TOTAL: ' + totalMigras + ' MIGRACIONES';
    } else {
        resumenText = 'TOTAL: ' + totalVentas + ' VENTAS + ' + totalMigras + ' MIGRACIONES';
    }

    document.getElementById('totalVentas').innerText = resumenText;
}

function agregarVenta() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var nombre = document.getElementById('nombre').value;
    var producto = document.getElementById('producto').value;
    var selectElement = document.getElementById('producto');
    var selectedIndex = selectElement.selectedIndex;
    var selectedOptionText = selectElement.options[selectedIndex].text;
    console.log(selectedOptionText);
    
    // Verificar si se ha ingresado un nombre
    if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (isNaN(cantidad) || cantidad < 0) {
        alert('Por favor, ingresa una cantidad válida.');
        return; // Salir de la función si la cantidad no es válida
    } else {
        var venta = document.createElement('p');
        if (cantidad === 0) {
            venta.innerText = nombre + ': 0 ❌';
        } else {
            venta.innerText = nombre + ': ' + cantidad + ' ' + selectedOptionText + ' para Instalación Urgente 💪✅';
            venta.setAttribute('data-cantidad', cantidad);
            venta.classList.add('venta');

            if (producto === "7") {
                venta.innerText = nombre + ' (Inducción)';
                venta.setAttribute('data-cantidad', ''); // No se requiere cantidad
                venta.classList.add('venta');
            } else if (producto === "6") {
                venta.innerText = nombre + ': ' + cantidad + ' Migra para Instalación Urgente 💪✅';
                venta.setAttribute('data-cantidad', ''); // No se requiere cantidad
                venta.classList.add('venta');
            }
        }
    }

    document.getElementById('ventas').appendChild(venta);
    calcularTotal();
}
