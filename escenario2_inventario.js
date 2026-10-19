const productos = [
    { nombre: "Teclado Mecánico", precio: 80, stock: 15 },
    { nombre: "Mouse Inalámbrico", precio: 25, stock: 0 },
    { nombre: "Monitor 24 pulgadas", precio: 200, stock: 8 },
    { nombre: "Audífonos Gamer", precio: 50, stock: 0 },
    { nombre: "Silla Ergonómica", precio: 150, stock: 5 }
];

function procesarInventario(listaProductos) {
    let totalValorInventario = 0;
    let productosDisponibles = 0;

    console.log("--- PRODUCTOS DISPONIBLES EN TIENDA ---");

    for (const producto of listaProductos) {
        if (producto.stock > 0) {
            const valorTotalProducto = producto.precio * producto.stock;
            totalValorInventario += valorTotalProducto;
            productosDisponibles++;

            console.log(`- ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock} unidades`);
        }
    }

    console.log(`\nResumen: ${productosDisponibles} productos en stock.`);
    console.log(`Valor Total del Inventario Activo: $${totalValorInventario}\n`);
}

console.log("--- PRUEBA ESCENARIO 2 ---");
procesarInventario(productos);