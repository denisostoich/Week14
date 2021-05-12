var expresiones = {
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    fullName: /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{6,})+$/,         // Debe tener más de 6 letras y al menos un espacio entre medio.    
	password: /^[a-zA-Z0-9]{8,16}$/,         // Al menos 8 caracteres, formados por letras y números.
	confirmPassword: /^[a-zA-Z0-9]{8,16}$/,  // Al menos 8 caracteres, formados por letras y números.
}

var campos = {
    email: false,
    fullName: false,
    password: false,
}

var formulario = document.getElementById('form');
var inputs = document.querySelectorAll('#form input');

var validForm = function (e) {
    switch (e.target.name){
        case "emailInput":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('emailInput').classList.remove('formularioGrupoIncorrecto');
                document.getElementById('emailInput').classList.add('formularioGrupoCorrecto');
                document.querySelector('#grupoEmail .formularioInput').classList.remove('formularioInputError');
                campos['email'] = true;
            } else {
                document.getElementById('emailInput').classList.add('formularioGrupoIncorrecto');
                document.getElementById('emailInput').classList.remove('formularioGrupoCorrecto');
                document.querySelector('#grupoEmail .formularioInput').classList.add('formularioInputError'); 
                campos['email'] = false;
            }
        break;
        case "fullNameInput":
            if (expresiones.fullName.test(e.target.value)) {
                document.getElementById('fullNameInput').classList.remove('formularioGrupoIncorrecto');
                document.getElementById('fullNameInput').classList.add('formularioGrupoCorrecto');
                document.querySelector('#grupoNombre .formularioInput').classList.remove('formularioInputError');
                campos['fullName'] = true;
            } else {
                document.getElementById('fullNameInput').classList.add('formularioGrupoIncorrecto');
                document.getElementById('fullNameInput').classList.remove('formularioGrupoCorrecto');
                document.querySelector('#grupoNombre .formularioInput').classList.add('formularioInputError');
                campos['fullName'] = false;
            }
        break;  
        case "passwordInput":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('passwordInput').classList.remove('formularioGrupoIncorrecto');
                document.getElementById('passwordInput').classList.add('formularioGrupoCorrecto');
                document.querySelector('#grupoPassword .formularioInput').classList.remove('formularioInputError');
                campos['password'] = true;
            } else {
                document.getElementById('passwordInput').classList.add('formularioGrupoIncorrecto');
                document.getElementById('passwordInput').classList.remove('formularioGrupoCorrecto');
                document.querySelector('#grupoPassword .formularioInput').classList.add('formularioInputError');
                campos['password'] = false;
            }
        break;
        case "confirmPasswordInput":
            var inputPassword1 = document.getElementById('passwordInput');
            var inputPassword2 = document.getElementById('confirmPasswordInput');
            if (inputPassword1.value !== inputPassword2.value) {
                document.getElementById('confirmPasswordInput').classList.add('formularioGrupoIncorrecto');
                document.getElementById('confirmPasswordInput').classList.remove('formularioGrupoCorrecto');
                document.querySelector('#grupoConfirmPassword .formularioInput').classList.add('formularioInputError');
                campos['password'] = false;
            } else {
                document.getElementById('confirmPasswordInput').classList.remove('formularioGrupoIncorrecto');
                document.getElementById('confirmPasswordInput').classList.add('formularioGrupoCorrecto');
                document.querySelector('#grupoConfirmPassword .formularioInput').classList.remove('formularioInputError');
                campos['password'] = true;
            }
        break;
    }
}
    
inputs.forEach( function(input){
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm);   
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = document.querySelector('.data');
    if (campos.email && campos.fullName && campos.password){
        formulario.reset();
        data.style.display = 'flex';
        data.innerHTML ="Email: " + document.querySelector('#emailInput').value +
         " Full Name: " + document.querySelector('#fullNameInput').value + " Password: "+document.querySelector('#passwordInput').value;
        sendRegisterForm();
    }else {
        data.style.display = 'flex';
        data.style.color = 'red';
        data.textContent = 'Complete the fields properly';
    } 
})

//Post Request
function sendRegisterForm(){
    fetch('http://localhost:4000/register.html',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('emailInput').value,
            fullName: document.getElementById('fullNameInput').value,
            password: document.getElementById('passwordInput').value,
        })
    })
    .then (response => response.json())
    .then (data => console.log(data))
    .catch(function(error){
        console.log("Error sending data");
    })
}