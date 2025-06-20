// Resumen básico de JavaScript

// Mostrar mensaje en consola
console.log("¡JavaScript funcionando!");

// Variables
let nombre = "Carlos";
const edad = 30;
var ciudad = "Madrid";

// Función simple
function saludar() {
    console.log("Hola, esto es una función");
}
saludar();

// Función con parámetro
function saludarA(nombre) {
    console.log("Hola " + nombre);
}
saludarA("Fernando cabron");

// Condicional
let hora = 10;
if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}

// Evento: clic en un botón
let miBoton = document.getElementById("miBoton");

miBoton.addEventListener("click", function () {
    alert("¡Has hecho clic!");

    // Cambiar texto del HTML
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Texto cambiado con JavaScript";
});

// Leer datos del formulario
let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // evita recargar la página

    let nombreUsuario = document.getElementById("nombre").value;
    alert("Hola " + nombreUsuario + ", formulario recibido.");
});
