/*
Solicita al usuario datos personales como el nombre la edad y su pais tambien su departamento, el programa debe otorgar becas academicas a personas que solo sean de toronto canada, mayores de 18
*/

function verificarBeca() {
    let becaNombre = document.getElementById('nombre').value
    let becaEdad = document.getElementById('edad').value
    let becaPais = document.getElementById('pais').value.toLowerCase()
    let becaDepartamento = document.getElementById('departamento').value.toLowerCase()

    if (becaEdad >= 18 && (becaPais == 'canada' || becaPais == 'canadá') && becaDepartamento == 'toronto') {
        alert("Felicitaciones " + becaNombre + ". ¡BECA OTORGADA!")
    }
    else {
        alert("Lo sentimos " + becaNombre +". Beca denegada.")
    }

}