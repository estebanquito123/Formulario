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
    
        var apepa = document.getElementById("apellidoPaterno");
        var caracteresapepa = apepa.value.trim();
    
        if (caracteresapepa.length < 3 || caracteresapepa > 20 ){
            alert("Apellido paterno no valido, debe contener entre 3 y 20 caracteres.");
        }
    
        var apema = document.getElementById("apellidoMaterno");
        var caracteresapema = apema.value.trim();
    
        if (caracteresapema.length < 3 || caracteresapema.length > 20){
            alert("Apellido materno no valido, debe contener entre 3 y 20 caracteres.");
        }
    
        var edad = parseInt(document.getElementById("edad").value);
    
        if (edad < 18 || edad > 35){
            alert("Edad no valida para la postulacion");
        }
    
        var genero = document.getElementById("genero").value;
    
        if(genero == ""){
            alert("Debe seleccionar un genero");
        }
    
        var numero = document.getElementById("celular");
        var numerostr = numero.value.toString();
    
        if(numerostr.length < 9 || numerostr.length > 12){
            alert("Numero de celular no valido, debe contener entre 9 y 12 numeros");
        }
    }






function generarCarta() {
    const rut = document.getElementById('rut').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const nombre = document.getElementById('nombre').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const profesion = document.getElementById('profesion').value;
    const motivacion = document.getElementById('motivacion').value;

    const carta = `Chiloé, ${new Date().toLocaleDateString()}

    Estimado/a,

    Me dirijo a usted para expresar mi más sincero interés en postular al puesto de apoyo ambiental en Chiloé.

    Mis datos personales son:
    - RUT: ${rut}
    - Nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}
    - Fecha de Nacimiento: ${fechaNacimiento}
    - Edad: ${edad} años
    - Género: ${genero}
    - Email: ${email}
    - Celular: ${celular}
    - Profesión: ${profesion}

    Motivación para postular:
    ${motivacion}

    Quedo a su disposición para cualquier consulta adicional.

    Atentamente,
    ${nombre} ${apellidoPaterno} ${apellidoMaterno}`;

    document.getElementById('carta').value = carta;
}