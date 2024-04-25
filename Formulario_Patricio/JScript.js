function validarDatos() {
    var rut = document.getElementById("rut");
    var caracteresrut = rut.value.trim(); // Eliminamos espacios en blanco al inicio y al final
        
    if (caracteresrut.length < 9 || caracteresrut.length > 10) {
    alert("Rut no valido, debe estar entre 9 y 10 caracteres.");
    } 

    var nombre = document.getElementById("nombre");
    var caracteresnom = nombre.value.trim();

    if (caracteresnom.length < 3 || caracteresnom > 20){
        alert("Nombre no valido, debe tener entre 3 y 20 caracteres.");
    }

    var apepa = document.getElementById("appa");
    var caracteresapepa = apepa.value.trim();

    if (caracteresapepa.length < 3 || caracteresapepa > 20 ){
        alert("Apellido paterno no valido, debe contener entre 3 y 20 caracteres.");
    }

    var apema = document.getElementById("apma");
    var caracteresapema = apema.value.trim();

    if (caracteresapema.length < 3 || caracteresapema.length > 20){
        alert("Apellido materno no valido, debe contener entre 3 y 20 caracteres.");
    }

    var edad = parseInt(document.getElementById("edad").value);

    if (edad < 18 || edad > 35){
        alert("Edad no valida para la postulacion");
    }

    var seleccion = document.getElementById("seleccion").value;

    if(seleccion == ""){
        alert("Debe seleccionar un genero");
    }

    var numero = document.getElementById("celular");
    var numerostr = numero.value.toString();

    if(numerostr.length < 9 || numerostr.length > 12){
        alert("Numero de celular no valido, debe contener entre 9 y 12 numeros");
    }
}

function concatenar(){
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var appa = document.getElementById("appa").value;
    var apma = document.getElementById("apma").value;
    var fnaci = document.getElementById("fnac").value;
    var edad = document.getElementById("edad").value;
    var gen = document.getElementById("seleccion").value;
    var email = document.getElementById("email").value;
    var prof = document.getElementById("profesion").value;
    var celular = document.getElementById("celular").value;
    var motivo = document.getElementById("motivo").value;

    var resultado = "Rut: " + rut + "<br>" +
                    "Nombre: " + nombre +
                    "A. Paterno: " + appa + "&emsp;" +
                    "A. Materno: " + apma + "<br>" +
                    "F. Nacimiento: " + fnaci + "<br>" +
                    "Edad: " + edad + "<br>" +
                    "Genero: " + gen + "<br>" +
                    "Email: " + email + "<br>" +
                    "Profesion: " + prof + "<br>" +
                    "Num. Celular: " + celular + "<br>" +
                    "Motivo de postulacion: " + "<br>" + motivo;
    localStorage.setItem("datosConcatenados", resultado);

    window.location.href = "index.html";
}

window.onload = function() {
    // Recuperar los datos del localStorage
    var datosConcatenados = localStorage.getItem("datosConcatenados");

    // Mostrar los datos en la página
    document.getElementById("resultado").innerHTML = datosConcatenados;
};
