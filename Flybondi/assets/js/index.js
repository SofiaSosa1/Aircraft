function checkSameSelection() {
  const origenSelect = document.getElementById("origen");
  const destinoSelect = document.getElementById("destino");
  const enviarBtn = document.getElementById("enviarBtn");

  if (origenSelect.value !== "Origen" && destinoSelect.value !== "Destino" && origenSelect.value !== destinoSelect.value) {
      enviarBtn.disabled = false;
     
          localStorage.setItem("Origen", origenSelect.value);
          localStorage.setItem("Destino", destinoSelect.value);
          localStorage.setItem("cantidadPasajeros", 1);
    
  } else {
      enviarBtn.disabled = true;
      destinoSelect.selectedIndex = 0;
    
  }

}
document.getElementById("origen").addEventListener("change", checkSameSelection);
document.getElementById("destino").addEventListener("change", checkSameSelection);
 
function enviarBtn(){
  window.location.href = "seleccionDia.html";
}     