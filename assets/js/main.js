let nombreUsuario;

function pedirNombre() {
    nombreUsuario = prompt("¡Bienvenido/a a SF RECORDS Por favor ingresa tu nombre:");
    if (nombreUsuario == null || nombreUsuario == "") {
        pedirNombre();
    }
}

pedirNombre();

let opcionesProducto = {
    1: {
        nombre: "microfonos",
        precio: 500
    },
    2: {
        nombre: "controlador midi",
        precio: 750
    },
    3: {
        nombre: "speakers",
        precio: 850
    }
};

let tipoDeProducto;

function pedirTipoDeProducto() {
    let mensajeOpciones = "seleccione articulo de interes:\n\n";
    for (let opcion in opcionesProducto) {
        mensajeOpciones += opcion + ". " + opcionesProducto[opcion].nombre + " ($" + opcionesProducto[opcion].precio + " USD)\n";
    }
    tipoDeProducto = prompt(mensajeOpciones);
    if (!(tipoDeProducto in opcionesProducto)) {
        alert("Opción de Producto inválida. Por favor, vuelva a intentarlo.");
        pedirTipoDeProducto();
    }
}

pedirTipoDeProducto();

let cantidadProducto = {};
function pedirCantidadProducto() {
    let cantidad = prompt("¿Cuántos Productos de " + opcionesProducto[tipoDeProducto].nombre + " desea?");
    cantidad = parseInt(cantidad);
    if (isNaN(cantidad)) {
    alert("Lo siento, cantidad inválida. Por favor, vuelva a intentarlo.");
    pedirCantidadProducto();
    } else {
    cantidadProducto[tipoDeProducto] = cantidad;
    }
}

pedirCantidadProducto();

let precioTotal = opcionesProducto[tipoDeProducto].precio * cantidadProducto[tipoDeProducto];

alert("¡Gracias, " + nombreUsuario + "! El precio total de los Productos es de $" + precioTotal + " USD.");