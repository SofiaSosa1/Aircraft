const seats = document.querySelectorAll('.seat.available');
const selectedSeatsList = document.getElementById('selected-seats');
const enviarBtnContinuarr = document.getElementById("enviarBtnContinuar");

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seats.forEach(s => s.classList.remove('selected'));
        console.log("Todos los asientos deseleccionados");
        seat.classList.add('selected');
        console.log(`Asiento ${seat.innerText} seleccionado`);

        updateSelectedSeats();
    });
});

function updateSelectedSeats() {

    const selectedSeats = document.querySelectorAll('.seat.selected');
    selectedSeatsList.innerHTML = '';

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

        selectedSeatsArray.push(seatNumber);
    });

    localStorage.setItem("asientosSeleccionados", JSON.stringify(selectedSeatsArray));
    enviarBtnContinuarr.disabled = selectedSeatsArray.length === 0;
}

function enviarBtnContinuar() {
    window.location.href = "datosPersonales.html";
}
