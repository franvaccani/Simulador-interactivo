
function carritoDeCompras() {
    let costoTotal = 0;
    let continuar = true; 

    
    while (continuar) {
        let producto = prompt("Ingrese el producto (mate_madera, mate_calabaza, bombilla_acero, kit_limpieza):");
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));

       
        if (producto === "mate_madera") {
            costoTotal += 500 * cantidad;
            console.log(`Agregaste ${cantidad} Mate(s) de madera al carrito. Subtotal: $${500 * cantidad}`);
        } else if (producto === "mate_ceramica") {
            costoTotal += 800 * cantidad;
            console.log(`Agregaste ${cantidad} Mate(s) de cerámica al carrito. Subtotal: $${800 * cantidad}`);
        } else if (producto === "bombilla_acero") {
            costoTotal += 300 * cantidad;
            console.log(`Agregaste ${cantidad} Bombilla(s) de acero al carrito. Subtotal: $${300 * cantidad}`);
        } else if (producto === "kit_limpieza") {
            costoTotal += 200 * cantidad;
            console.log(`Agregaste ${cantidad} Kit(s) de limpieza al carrito. Subtotal: $${200 * cantidad}`);
        } else {
            console.log("Producto no válido, intente nuevamente.");
        }

        
        let respuesta = prompt("¿Desea agregar otro producto? (si/no):");

        if (respuesta.toLowerCase() !== "si") {
            continuar = false;
        }
    }

    
    if (costoTotal > 1500) {
        costoTotal *= 0.9; 
        console.log("Se aplicó un 10% de descuento por superar los $1500.");
    }

    
    console.log("El costo total es: $" + costoTotal);
}


carritoDeCompras();