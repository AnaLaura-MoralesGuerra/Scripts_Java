function calcularTotalConDescuento(montoTotal, esMiembroVIP, edadCliente) {
    let porcentajeDescuento = 0;

    if (montoTotal >= 1000 || esMiembroVIP) {
        porcentajeDescuento = 0.20; 
    } else if (montoTotal >= 500 && edadCliente >= 60) {
        porcentajeDescuento = 0.15; 
    } else if (montoTotal >= 500) {
        porcentajeDescuento = 0.10;
    } else {
        porcentajeDescuento = 0.05; 
    }

    const descuentoAplicado = montoTotal * porcentajeDescuento;
    const totalFinal = montoTotal - descuentoAplicado;

    console.log(`Monto Original: $${montoTotal}`);
    console.log(`Descuento Aplicado (${porcentajeDescuento * 100}%): -$${descuentoAplicado}`);
    console.log(`Total a Pagar: $${totalFinal}\n`);

    return totalFinal;
}

console.log("--- PRUEBA ESCENARIO 1 ---");
calcularTotalConDescuento(1200, false, 25);
calcularTotalConDescuento(600, false, 65);
calcularTotalConDescuento(300, false, 20);