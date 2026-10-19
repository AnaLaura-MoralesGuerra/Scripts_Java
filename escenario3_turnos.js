function generarTurnosDisponibles(horaInicio, horaFin, maxTurnos) {
    let horaActual = horaInicio;
    let contadorTurnos = 0;

    console.log(`Generando agendamiento desde las ${horaInicio}:00 hrs hasta las ${horaFin}:00 hrs...\n`);

    // Ciclo while para asignar turnos dentro del rango de tiempo y límite de cupos
    while (horaActual < horaFin && contadorTurnos < maxTurnos) {
        contadorTurnos++;
        console.log(`Turno #${contadorTurnos} asignado a las ${horaActual}:00 hrs.`);
        
        horaActual += 1; 
    }

    if (contadorTurnos === maxTurnos && horaActual < horaFin) {
        console.log("\n⚠️ Se ha alcanzado el límite máximo de turnos para el día de hoy.");
    } else {
        console.log("\n✅ Se han cubierto todos los horarios del día.");
    }
}

console.log("--- PRUEBA ESCENARIO 3 ---");
generarTurnosDisponibles(9, 17, 5);