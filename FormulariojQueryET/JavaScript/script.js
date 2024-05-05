$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault(); // Evita el envío del formulario
  
      // Limpiar mensajes de error
      $('.error-msg').text('');
  
      // Validaciones con jQuery
      validarRut();
      validarNombre();
      validarApellidoPaterno();
      validarApellidoMaterno();
      validarEdad();
      validarGenero();
      validarEmail();
      validarCelular();
      validarProfesion();
      validarMotivacion();
  
      // Envía el formulario si no hay errores de validación
      if ($('.error-msg').text() === '') {
        this.submit();
      }
    });
  
    $('#crearCarta').click(function() {
      // Generar carta de presentación
      const carta = generarCarta();
  
      // Mostrar carta en el textarea
      $('#carta').val(carta);
    });
  });
  
  function validarRut() {
    const rut = $('#rut').val();
    if (rut.length < 9 || rut.length > 10) {
      $('#rut-error').text('El RUT debe tener entre 9 y 10 caracteres.');
    }
  }
  
  function validarNombre() {
    const nombre = $('#nombre').val();
    if (nombre.length < 3 || nombre.length > 20) {
      $('#nombre-error').text('El nombre debe tener entre 3 y 20 caracteres.');
    }
  }
  
  function validarApellidoPaterno() {
    const apellidoPaterno = $('#apellido-paterno').val();
    if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
      $('#apellido-paterno-error').text('El apellido paterno debe tener entre 3 y 20 caracteres.');
    }
  }
  
  function validarApellidoMaterno() {
    const apellidoMaterno = $('#apellido-materno').val();
    if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
      $('#apellido-materno-error').text('El apellido materno debe tener entre 3 y 20 caracteres.');
    }
  }
  
  function validarEdad() {
    const edad = $('#edad').val();
    if (edad < 18 || edad > 35) {
      $('#edad-error').text('La edad debe estar entre 18 y 35 años.');
    }
  }
  
  function validarGenero() {
    const genero = $('#genero').val();
    if (!genero) {
      $('#genero-error').text('Selecciona tu género.');
    }
  }
  
  function validarEmail() {
    const email = $('#email').val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('#email-error').text('Ingresa un email válido.');
    }
  }
  
  function validarCelular() {
    const celular = $('#celular').val();
    if (celular.length < 9 || celular.length > 12) {
      $('#celular-error').text('El número de celular debe tener entre 9 y 12 caracteres.');
    }
  }
  
  function validarProfesion() {
    const profesion = $('#profesion').val();
    if (profesion.length === 0) {
      $('#profesion-error').text('Ingresa tu profesión.');
    }
  }
  
  function validarMotivacion() {
    const motivacion = $('#motivacion').val();
    if (motivacion.length === 0) {
      $('#motivacion-error').text('Ingresa tu motivación para postular.');
    }
  }
  
  // Función para generar la carta de presentación
  function generarCarta() {
    const rut = $('#rut').val();
    const nombre = $('#nombre').val();
    const apellidoPaterno = $('#apellido-paterno').val();
    const apellidoMaterno = $('#apellido-materno').val();
    const fechaNacimiento = $('#fecha-nacimiento').val();
    const edad = $('#edad').val();
    const genero = $('#genero').val();
    const email = $('#email').val();
    const celular = $('#celular').val();
    const profesion = $('#profesion').val();
    const motivacion = $('#motivacion').val();
  
    // Construir el contenido de la carta
    let carta = `Estimado/a equipo de la fundacion Chile Limpio,
  
    Me llamo ${nombre} ${apellidoPaterno} ${apellidoMaterno}, mi RUT es ${rut}, y nací el ${fechaNacimiento}. Tengo ${edad} años de edad y mi genero es ${genero}.
  
    Pueden contactarme a través de mi correo electrónico ${email} o mi número de celular ${celular}.
  
    Soy ${profesion} y estoy muy interesado/a en postular al trabajo de apoyo ambiental para Chiloé. Mi motivación para este trabajo es la siguiente:
  
    ${motivacion}
  
    Quedo a su disposición para cualquier consulta adicional.
  
    Atentamente,
    ${nombre} ${apellidoPaterno} ${apellidoMaterno}`;
  
    return carta;
  }
  
  