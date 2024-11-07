  /*function enviarBtnCon() {
    const dia = diaSelect.value;
    const mes = mesSelect.value;
    const anio = anioSelect.value;
    const horario = horarioSelect.value;

    if (dia && mes && anio && horario) {
        localStorage.setItem("Dia", dia);
        localStorage.setItem("Mes", mes);
        localStorage.setItem("Año", anio);
        localStorage.setItem("Horario", horario);
        window.location.href = "miVuelo.html"; 
    } else {
        alert("Por favor, selecciona todos los campos.");
    }
}

*/
function mostrarDatosReserva() {
   
    document.getElementById("origen").innerText = localStorage.getItem("Origen") || "No disponible";
    document.getElementById("destino").innerText = localStorage.getItem("Destino") || "No disponible";
    const dia = localStorage.getItem("Dia");
    const mes = localStorage.getItem("Mes");
    const anio = localStorage.getItem("Año");

    document.getElementById("fecha").innerText = dia && mes && anio ? `${dia} de ${mes} ${anio}` : "No disponible";
    document.getElementById("horario").innerText = localStorage.getItem("Horario") || "No disponible";
    const asientosSeleccionados = JSON.parse(localStorage.getItem("asientosSeleccionados")) || [];
    document.getElementById("asientos").innerText = asientosSeleccionados.length > 0 ? asientosSeleccionados.join(', ') : "No disponible";


mostrarDatosPersonales();
}

window.onload = mostrarDatosReserva;
function mostrarDatosPersonales() {
    const pasajeros = JSON.parse(localStorage.getItem("Pasajeros")) || [];
    const ultimoPasajero = pasajeros[pasajeros.length - 1]; // Obtener el último pasajero agregado

    // Mostrar datos en el HTML
    document.getElementById("nombre").innerText = ultimoPasajero.nombre;
    document.getElementById("apellido").innerText = ultimoPasajero.apellido;
    document.getElementById("fechaNacimiento").innerText = ultimoPasajero.fechaNacimiento;
    document.getElementById("email").innerText = ultimoPasajero.email;
    document.getElementById("telefono").innerText = ultimoPasajero.telefono;
    document.getElementById("pais").innerText = ultimoPasajero.pais;
    document.getElementById("dni").innerText = ultimoPasajero.dni;
    document.getElementById("genero").innerText = ultimoPasajero.genero;
}

function finalizarReserva() {
    alert("Reserva confirmada. ¡Gracias por elegirnos!");
    localStorage.clear();  
    window.location.href = "index.html";  
}