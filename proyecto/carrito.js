var cont=0;
var  total =0;
var seleccionados=[];

function seleccionar(id_fila) {
    let index = seleccionados.indexOf(id_fila); // Buscar si ya está en el array

    if (index !== -1) {
        // Si ya está seleccionado, lo deseleccionamos
        $(`#${id_fila}`).removeClass("seleccionada"); // Remover la clase CSS
        seleccionados.splice(index, 1); // Removerlo del array de seleccionados
    } else {
        // Si no está seleccionado, lo añadimos
        $(`#${id_fila}`).addClass("seleccionada"); // Agregar la clase CSS
        seleccionados.push(id_fila); // Añadir al array de seleccionados
    }

    console.log("Seleccionados:", seleccionados); // Mostrar los seleccionados en consola
}

function eliminar(id_filas) {
    for (let i = 0; i < id_filas.length; i++) {
        let filaId = id_filas[i];

        // Obtener el precio de la última celda de la fila y restarlo del total
        let precio = parseFloat($(`#${filaId} td:last`).text()); // Última celda contiene el precio
        total -= precio; // Restar el precio del total
    }

    // Redondear el total y actualizar en pantalla
    total = Math.max(0, Math.round(total * 100) / 100); // Asegurar que el total no sea negativo
    $("#total").text(`${total.toFixed(2)} Bs.`);

    // Eliminar las filas seleccionadas del DOM
    for (let i = 0; i < id_filas.length; i++) {
        $(`#${id_filas[i]}`).remove();
    }

    // Limpiar la lista de seleccionados
    seleccionados = [];
}

function agregar(nombre, precio) {
    cont++;
    $("#contador").text(cont);

    // Crear nueva fila
    var fila = `<tr id="fila${cont}" class="selected" onclick="seleccionar(this.id)">
        <td>${cont}</td>
        <td>${nombre}</td>
        <td>${precio}</td>
    </tr>`;
    $("#tabla tbody").append(fila);

    // Convertir precio a número y sumar
    total += parseFloat(precio); // Asegúrate de convertir a número
    total = Math.round(total * 100) / 100; // Redondear a 2 decimales si hay decimales

    $("#total").text(`${total.toFixed(2)} Bs.`); // Mostrar el total con formato correcto
}
// Función para eliminar filas seleccionadas y actualizar el total
function eliminar(id_filas) {
    for (let i = 0; i < id_filas.length; i++) {
        let filaId = id_filas[i];
        
        // Restar el precio de la fila eliminada del total
        let precio = parseFloat($(`#${filaId} td:last`).text()); // Obtener el precio de la última celda
        total -= precio;

        // Redondear y actualizar el total en pantalla
        total = Math.round(total * 100) / 100;
        $("#total").text(`${total.toFixed(2)} Bs.`);

        // Eliminar la fila del DOM
        $(`#${filaId}`).remove();
    }

    // Limpiar la lista de seleccionados
    seleccionados = [];
}

// Botón de pagar
$("#btnpagar").click(function () {
    if (total > 0) {
        alert(`Pago realizado con éxito. Total pagado: ${total.toFixed(2)} Bs.`);
        
        // Reiniciar variables
        cont = 0;
        total = 0;
        seleccionados = [];
        
        // Limpiar tabla y actualizar contador y total
        $("#tabla tbody").empty();
        $("#contador").text(cont);
        $("#total").text(`${total.toFixed(2)} Bs.`);
    } else {
        alert("No hay productos en el carrito para pagar.");
    }
});

// Botón de eliminar
$("#btndel").click(function () {
    if (seleccionados.length > 0) {
        eliminar(seleccionados);
    } else {
        alert("No hay productos seleccionados para eliminar.");
    }
});


$("#btnprod1").click(function () { 
    let nombre = $("#nombre").text();
    let precio =$("#precio").text();
    console.log("has hecho click al boton")
    console.log(nombre, precio)
    agregar(nombre,precio)
    total = Math.round(total * 100)/100;
});

$("#btnag1").click(function (e) { 
    let nombre1 = $("#nombre1").text();
    let precio1 =$("#precio1").text();
    console.log("has hecho click al boton")
    console.log(nombre1, precio1)
    agregar(nombre1,precio1)
});
$("#btnag2").click(function (e) { 
    let nombre2 = $("#nombre2").text();
    let precio2 =$("#precio2").text();
    console.log("has hecho click al boton")
    console.log(nombre2, precio2)
    agregar(nombre2,precio2)
});
$("#btn4").click(function (e) { 
    let nombre3 = $("#nombre3").text();
    let precio3 =$("#precio3").text();
    console.log("has hecho click al boton")
    console.log(nombre3, precio3)
    agregar(nombre3,precio3)
});
$("#btn5").click(function (e) { 
    let nombre5 = $("#nombre5").text();
    let precio5 =$("#precio5").text();
    console.log("has hecho click al boton")
    console.log(nombre5, precio5)
    agregar(nombre5,precio5)
});
$("#btn6").click(function (e) { 
    let nombre6 = $("#nombre6").text();
    let precio6 =$("#precio6").text();
    console.log("has hecho click al boton")
    console.log(nombre6, precio6)
    agregar(nombre6,precio6)
});
$("#btn7").click(function (e) { 
    let nombre7 = $("#nombre7").text();
    let precio7 =$("#precio7").text();
    console.log("has hecho click al boton")
    console.log(nombre7, precio7)
    agregar(nombre7,precio7)
});
$("#btn8").click(function (e) { 
    let nombre8 = $("#nombre8").text();
    let precio8 =$("#precio8").text();
    console.log("has hecho click al boton")
    console.log(nombre8, precio8)
    agregar(nombre8,precio8)
});
$("#btn9").click(function (e) { 
    let nombre3 = $("#nombre9").text();
    let precio3 =$("#precio9").text();
    console.log("has hecho click al boton")
    console.log(nombre9, precio9)
    agregar(nombre3,precio3)
});
$("#btn10").click(function (e) { 
    let nombre10= $("#nombre10").text();
    let precio10 =$("#precio10").text();
    console.log("has hecho click al boton")
    console.log(nombre10, precio10)
    agregar(nombre3,precio3)
});

$("#btndel").click(function () {
    if (seleccionados.length === 0) {
        alert("Selecciona al menos un producto para eliminar.");
    } else {
        eliminar(seleccionados);
    }
});

