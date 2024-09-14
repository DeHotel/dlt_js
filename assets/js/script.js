var cantidadProdutcos = 2;
var precioUnitario = 400000;
var totalGeneral = cantidadProdutcos * precioUnitario;
// alert("Total General: $" + totalGeneral);

var spanTotal = document.querySelector("#total"); // Bueca por Id, se antepone #
var spanTotal = document.querySelector(".total"); // Bueca por clase, se antepone .
// var spanTotal = document.getElementById("total");
spanTotal.innerHTML = totalGeneral;

// var miNombre = prompt("Me das tu nombre?");

// alert("Hola " + miNombre);

// var numero1 = prompt("Ingrese 1er numero");
// var numero2 = prompt("Ingrese 2do numero");
// var totalSuma = Number(numero1) + Number(numero2);
// alert("El resultado es: " + totalSuma);

var botonSumar = document.querySelector("#sumar");

botonSumar.addEventListener("click", function () {
  var cantidadProduct = document.querySelector("#cantidad"); // Bueca por Id, se antepone #
});
