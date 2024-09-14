const precio = 400000;
document.querySelector("#precio").innerHTML = precio;
document.querySelector("#total").innerHTML = 0;
let spanCantid = document.querySelector("#cantidad");
let total = document.querySelector("#total");
let botonSumar = document.querySelector(".sumar");
let botonRestar = document.querySelector(".restar");
let cantid = 0;

botonSumar.addEventListener("click", function () {
  cantid += 1;
  calcular();
});

botonRestar.addEventListener("click", function () {
  cantid -= 1;
  if (cantid < 0) {
    cantid = 0;
  }
  calcular();
});

function calcular() {
  total.innerHTML = cantid * precio;
  spanCantid.innerHTML = cantid;
}
