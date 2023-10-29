document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    //VALIDAR NOMBRE
    let nombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(nombre.value.trim()=== ''){
        errorNombre.textContent = "Por favor introduce tu nombre"
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent =''
        errorNombre.classList.remove('error-message')
    }

    // VALIDAR APELLIDO

    let apellido = document.getElementById('lastname')
    let errorApellido = document.getElementById('lastnameError')

    if(apellido.value.trim()=== ''){
        errorApellido.textContent = "Por favor introduce tu apellido"
        errorApellido.classList.add('error-message')
    }else{
        errorApellido.textContent =''
        errorApellido.classList.remove('error-message')
    }

    // VALIDAR NUMERO DE TELEFONO

    let telefono = document.getElementById('telephone')
    let errorTelefono = document.getElementById ('telephoneError')
    
    if(telefono.value.length < 10){
        errorTelefono.textContent = 'Por favor ingrese un número de teléfono válido'
        errorTelefono.classList.add('error-message')
    }else{
        errorTelefono.textContent = ''
        errorTelefono.classList.remove('error-message')
    }

    //VALIDAR CORREO ELECTRÓNICO
    let email = document.getElementById('email')
    let errorEmail = document.getElementById ('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value)){
        errorEmail.textContent = "Por favor introduce un correo válido"
        errorEmail.classList.add('error-message')
    }else{
        errorEmail.textContent =''
        errorEmail.classList.remove('error-message')
    }

    //VALIDAR CONTRASEÑA
    let contrasena = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,30}$/;

    if(!passwordPattern.test(contrasena.value)){
        errorContrasena.innerHTML = "La contraseña debe tener al menos: <ul> <li>8 caracteres</li> <li>Un caracter númerico</li> <li>Una mayúscula</li> <li>Una minúscula</li>  <li> Un caracter especiale ($#./!,)</li> </ul>"
        errorContrasena.classList.add('error-message')
    }else{
        errorContrasena.textContent =''
        errorContrasena.classList.remove('error-message')
    }

    //VALIDAR CONFIRMACIÓN DE CONTRASEÑA
    let contrasena2 = document.getElementById('2password')
    let errorContrasena2 = document.getElementById('2passwordError')

    if(contrasena2.value != contrasena.value){
        errorContrasena2.textContent = "La contraseña no coincide con la anterior"
        errorContrasena2.classList.add('error-message')
    }else{
        errorContrasena2.textContent =''
        errorContrasena2.classList.remove('error-message')
    }

    //VALIDAR TYC

    let checkbox = document.getElementById('checkbox')
    let errorCheckbox = document.getElementById('checkError')

    if(!checkbox.checked){
        errorCheckbox.textContent = "Por favor acepta los términos y condiciones"
        errorCheckbox.classList.add('error-message')
    }else{
        errorCheckbox.textContent =''
        errorCheckbox.classList.remove('error-message')
    }

    //ENVÍO FORMULARIO (SI TODO ES CORRECTO)
    if(!errorNombre.textContent && !errorApellido.textContent && !errorTelefono.textContent && !errorEmail.textContent && !errorContrasena.textContent &&!errorContrasena2.textContent && !errorCheckbox.textContent){
        alert("El formulario se ha enviado con éxito")
        document.getElementById('formulario').reset()
    }
})