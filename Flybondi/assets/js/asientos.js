const seats = document.querySelectorAll('.seat.available');
const selectedSeatsList = document.getElementById('selected-seats');
const enviarBtnContinuarr = document.getElementById("enviarBtnContinuar");

// Añadir evento de clic a cada asiento
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Alternar entre las clases "selected" y "available"
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.classList.add('available');
        } else if (seat.classList.contains('available')) {
            seat.classList.remove('available');
            seat.classList.add('selected');
        }

        // Actualizar la lista de asientos seleccionados
        updateSelectedSeats();
    });
});

function updateSelectedSeats() {
    // Obtener todos los asientos seleccionados
    const selectedSeats = document.querySelectorAll('.seat.selected');
    
    // Limpiar la lista visual de asientos seleccionados
    selectedSeatsList.innerHTML = '';

    // Crear un array para almacenar los números de los asientos seleccionados
    const selectedSeatsArray = [];

    selectedSeats.forEach(seat => {
        const seatNumber = seat.innerText;
        const span = document.createElement('span');
        span.textContent = seatNumber;
        span.style.backgroundColor = '#ffc107';
        span.style.color = 'white';
        span.style.padding = '5px 10px';
        span.style.margin = '5px';
        span.style.borderRadius = '5px';
        selectedSeatsList.appendChild(span);

        // Agregar el número de asiento al array
        selectedSeatsArray.push(seatNumber);
    });

    // Guardar los asientos seleccionados en localStorage
    localStorage.setItem("asientosSeleccionados", JSON.stringify(selectedSeatsArray));

    // Habilitar el botón de continuar
    enviarBtnContinuarr.disabled = selectedSeatsArray.length === 0;
}

// Función para redirigir y pasar a la siguiente página
function enviarBtnContinuar() {
    window.location.href = "datosPersonales.html";
}
