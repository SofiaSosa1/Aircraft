function guardarDatosPersonales() {
    // Capturar los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const pais = document.getElementById("pais").value;
    const dni = document.getElementById("dni").value;
    const genero = document.getElementById("genero").value;

    // Crear un objeto con los datos personales del pasajero
    const pasajero = {
        nombre,
        apellido,
        fechaNacimiento,
        email,
        telefono,
        pais,
        dni,
        genero
    };

    // Obtener el array de pasajeros desde `localStorage`, o inicializarlo si no existe
    const pasajeros = JSON.parse(localStorage.getItem("Pasajeros")) || [];

    // Agregar el nuevo pasajero al array
    pasajeros.push(pasajero);

    // Guardar el array actualizado en `localStorage`
    localStorage.setItem("Pasajeros", JSON.stringify(pasajeros));

    
    if(nombre!="" &&  apellido!="" && fechaNacimiento!="" && email !="" && telefono!="" && pais!="" &&dni!="" && genero !=""      ){
        alert("Datos del pasajero guardados correctamente.");
        enviarDatosP()
    }
   
}

// Asignar la función al botón
document.getElementById("enviarDatos").addEventListener("click", guardarDatosPersonales);

// Redirigir a la página "miVuelo.html"
function enviarDatosP() {
    window.location.href = "miVuelo.html";
}


// Cargar los datos desde localStorage (puedes modificar esto según tu flujo de datos)

 /*
 document.getElementById("origen").innerText = localStorage.getItem("origen") || "No disponible";
 document.getElementById("destino").innerText = localStorage.getItem("destino") || "No disponible";
 document.getElementById("diaSelect").innerText = localStorage.getItem("diaSelect") || "No disponible";
 document.getElementById("mesSelect").innerText = localStorage.getItem("mesSelect") || "No disponible";
 document.getElementById("anioSelect").innerText = localStorage.getItem("anioSelect") || "No disponible";
 document.getElementById("horarioSelect").innerText = localStorage.getItem("horarioSelect   ") || "No disponible";

 // Asientos seleccionados
 const asientos = JSON.parse(localStorage.getItem("asientosSeleccionados") || "[]");
 const asientosList = document.getElementById("asientos");
 asientos.forEach(asiento => {
     const li = document.createElement("li");
     li.textContent = asiento;
     asientosList.appendChild(li);
 });

 // Datos personales
 document.getElementById("nombre").innerText = localStorage.getItem("nombre") || "No disponible";
 document.getElementById("apellido").innerText = localStorage.getItem("apellido") || "No disponible";
 document.getElementById("email").innerText = localStorage.getItem("email") || "No disponible";
 document.getElementById("telefono").innerText = localStorage.getItem("telefono") || "No disponible";
 document.getElementById("pais").innerText = localStorage.getItem("pais") || "No disponible";
 document.getElementById("genero").innerText = localStorage.getItem("genero") || "No disponible";
 document.getElementById("fechaNacimiento").innerText = localStorage.getItem("fechaNacimiento") || "No disponible";
 // Confirmar reserva
 function finalizarReserva() {
     alert("Reserva confirmada. ¡Gracias por elegirnos!");
     // Aquí podrías redirigir a otra página o limpiar los datos
     localStorage.clear();
   //  window.location.href = "index.html";
 }
*/