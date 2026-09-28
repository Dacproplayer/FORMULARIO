// Arreglo donde se van a guardar los alumnos
let alumnos = [];


function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let edad = parseFloat(
        document.getElementById("edad").value
    );

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;

    // Revisar el promedio

    if (promedio >= 9) {

        mensaje = "Excelente";

    } else if (promedio >= 8) {

        mensaje = "Muy bien";

    } else if (promedio >= 7) {

        mensaje = "Bien";

    } else if (promedio >= 6.5) {

        mensaje = "Piensa en conta";

    } else if (promedio >= 6) {

        mensaje = "Date de baja";

    } else {

        mensaje = "Vete a turismo o la 11";
    }

    // Crear alumno

    let alumno = {

        nombre: nombre,
        edad: edad,
        calificacion1: calificacion1,
        calificacion2: calificacion2,
        calificacion3: calificacion3,
        calificacion4: calificacion4,
        promedio: promedio,
        mensaje: mensaje

    };

    // Guardar alumno en el arreglo

    alumnos.push(alumno);

    // Mostrar el alumno que acabamos de registrar

    document.getElementById("resultado").innerHTML =

        "<strong>Alumno registrado:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><strong>Resultado:</strong> " + mensaje;


    // Mostrar todos los alumnos

    mostrarAlumnos();


}


// Función para mostrar todos los alumnos

function mostrarAlumnos() {

    let texto = "<h2>Alumnos registrados</h2>";


    for (let i = 0; i < alumnos.length; i++) {
        texto +=
            "<p>" +
            "<strong>Alumno " + (i + 1) + ":</strong><br>" +
            "Nombre: " + alumnos[i].nombre +
            "<br>Edad: " + alumnos[i].edad +        
            "<br>Promedio: " + alumnos[i].promedio.toFixed(2) +
            "</p><hr>";

    }


    document.getElementById("alumnosRegistrados").innerHTML = texto;

}


// Función para limpiar todos los datos

function limpiar() {

    // Limpiar los campos

    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";
    document.getElementById("calificacion4").value = "";


    // Limpiar resultados

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("alumnosRegistrados").innerHTML = "";




}