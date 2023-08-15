function probarContrasena() {
    let contrasena = prompt("Ingresa tu contraseña:")

    if (contrasena == "secreto123") {
        alert("Acceso concedido.")
    } else {
        alert("Acceso denegado.")
    }
}