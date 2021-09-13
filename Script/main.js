const datos = [];
const $myFormulario = document.getElementById("app");

const dibujarTabla = function () {
  $myFormulario.innerHTML = JSON.stringify(datos)
};

$myFormulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const $miInput1 = document.querySelector('input[name="fecha"]');
  const $miInput2 = document.querySelector('input[name="descripcion"]');

  datos.push({ fecha: $miInput1.value });
  datos.push({ descripcion: $miInput2.value });

  dibujarTabla();


});