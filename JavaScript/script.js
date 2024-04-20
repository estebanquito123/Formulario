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