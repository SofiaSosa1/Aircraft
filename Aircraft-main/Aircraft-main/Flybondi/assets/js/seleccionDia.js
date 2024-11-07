 // Rellenar opciones de días
 const diaSelect = document.getElementById('diaSelect');
 for (let i = 1; i <= 31; i++) {
     const option = document.createElement('option');
     option.value = i;
     option.textContent = i;
     diaSelect.appendChild(option);
 }

 // Rellenar opciones de años (ejemplo: del 2020 al 2030)
 const anioSelect = document.getElementById('anioSelect');
 for (let i = 2020; i <= 2030; i++) {
     const option = document.createElement('option');
     option.value = i;
     option.textContent = i;
     anioSelect.appendChild(option);
 }

 // Evento de clic en el botón Enviar
 document.getElementById('submitBtn').addEventListener('click', function() {
     const dia = diaSelect.value;
     const mes = mesSelect.value;
     const anio = anioSelect.value;

     if (dia && mes && anio) {
         const fechaSeleccionada = `Fecha seleccionada de Ida: ${dia}/${parseInt(mes) + 1}/${anio}`;
         document.getElementById('fechaSeleccionada').textContent = fechaSeleccionada;
     } else {
         alert('Por favor, selecciona día, mes y año.');
     }
 });

  

  // Rellenar opciones de días
  const diaSelectV = document.getElementById('diaSelectV');
  for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      diaSelectV.appendChild(option);
  }
 
  // Rellenar opciones de años (ejemplo: del 2020 al 2030)
  const anioSelectV = document.getElementById('anioSelectV');
  for (let i = 2020; i <= 2030; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      anioSelectV.appendChild(option);
  }
 
  // Evento de clic en el botón Enviar
  document.getElementById('submitBtnV').addEventListener('click', function() {
      const dia = diaSelectV.value;
      const mes = mesSelectV.value;
      const anio = anioSelectV.value;
 
      if (dia && mes && anio) {
          const fechaSeleccionada = `Fecha seleccionada de Vuelta: ${dia}/${parseInt(mes) + 1}/${anio}`;
          document.getElementById('fechaSeleccionadaV').textContent = fechaSeleccionada;
      } else {
          alert('Por favor, selecciona día, mes y año.');
      }
  });
 
   