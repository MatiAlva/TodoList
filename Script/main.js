const datos = [];
const $myFormulario = document.getElementById("app");
const $tabla = document.getElementById("table");

console.log(sessionStorage);

const dibujarTabla = function () {
  let nodos = "";

  datos.forEach((dato) => {
    nodos += "<tr>";
    nodos += `<td>FECHA: ${dato.fecha}</td><td>DESCRIPTION: ${dato.descripcion}</td>`;
    nodos += "</tr>";
  });

  $tabla.innerHTML = nodos;
};

$myFormulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const $miInput1 = document.querySelector('input[name="fecha"]');
  const $miInput2 = document.querySelector('input[name="descripcion"]');

  datos.push({ fecha: $miInput1.value, descripcion: $miInput2.value });

  dibujarTabla();


});