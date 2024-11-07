 // Rellenar opciones de días
 const diaSelect = document.getElementById('diaSelect');
 for (let i = 1; i <= 31; i++) {
     const option = document.createElement('option');
     option.value = i;
     option.textContent = i;
     diaSelect.appendChild(option);
 }

 const mesSelect = document.getElementById('mesSelect'); 
 const anioSelect = document.getElementById('anioSelect');
 for (let i = 2024; i <= 2030; i++) {
     const option = document.createElement('option');
     option.value = i;
     option.textContent = i;
     anioSelect.appendChild(option);
 }

 // Evento de clic en el botón Enviar

 /*
 document.getElementById('enviarBtnD').addEventListener('click', function() {
     const dia = diaSelect.value;
     const mes = mesSelect.value;
     const anio = anioSelect.value;

     if (dia && mes && anio) {
         const fechaSeleccionada = `Fecha seleccionada: ${dia}/${parseInt(mes) + 1}/${anio}`;
         document.getElementById('fechaSeleccionada').textContent = fechaSeleccionada;
     } else {
         alert('Por favor, selecciona día, mes y año.');
     }
 });
*/
 const horarioSelect = document.getElementById('horarioSelect');
    const enviarBtnD = document.getElementById("enviarBtnD");
    const enviarBtnH = document.getElementById("enviarBtnH");
    const enviarBtnC = document.getElementById("enviarBtnC");
   // Activar el botón solo si se seleccionan todas las opciones
function checkSelection() {
    if (diaSelect.value && mesSelect.value && anioSelect.value) {
       // enviarBtnD.disabled = false;
        enviarBtnC.disabled=true;
           // Guardar el origen y destino en localStorage
           localStorage.setItem("Dia", diaSelect.value);
           localStorage.setItem("Mes", mesSelect.value);
           localStorage.setItem("Año", anioSelect.value);
    } else {
       // enviarBtnD.disabled = true;
        enviarBtnC.disabled=true;
    }

    if (horarioSelect.value!="") {
      //  enviarBtnH.disabled = false;
        enviarBtnC.disabled=false;
        localStorage.setItem("Horario", horarioSelect.value);
    
    } 
  
      
}

diaSelect.addEventListener('change', checkSelection);
mesSelect.addEventListener('change', checkSelection);
anioSelect.addEventListener('change', checkSelection);
horarioSelect.addEventListener('change', checkSelection);

  function enviarBtnCon(){
    window.location.href = "asientos.html";
  }     