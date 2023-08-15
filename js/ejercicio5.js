/*
Crea una función llamada mostrarMensaje que tome un parámetro nombre. Dentro de la función, utiliza alert() para mostrar: "¡Hola, [nombre]! Espero que estés disfrutando de JavaScript." Pide al usuario su nombre utilizando prompt() y llama a la función.
(onclick)
*/


function mostrarMensaje(nombre) {
    alert("¡Hola, " + nombre + "! Espero que estés disfrutando de JavaScript.")
}

function obtenerNombre() {
    let nombreUsuario = prompt("¿Cómo te llamas?")
    mostrarMensaje(nombreUsuario)    
}
