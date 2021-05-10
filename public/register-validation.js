var expresiones = {
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    fullName: /^([a-zA-ZÀ-ÿ]+\ [a-zA-ZÀ-ÿ]){6,40}$/,         // Debe tener más de 6 letras y al menos un espacio entre medio.    
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
        case "email-input":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('email-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('email-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-email .formulario-input').classList.remove('formulario-input-error');
                campos['email'] = true;
            } else {
                document.getElementById('email-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('email-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-email .formulario-input').classList.add('formulario-input-error'); 
                campos['email'] = false;
            }
        break;
        case "full-name-input":
            if (expresiones.fullName.test(e.target.value)) {
                document.getElementById('full-name-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('full-name-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre .formulario-input').classList.remove('formulario-input-error');
                campos['fullName'] = true;
            } else {
                document.getElementById('full-name-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('full-name-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-nombre .formulario-input').classList.add('formulario-input-error');
                campos['fullName'] = false;
            }
        break;  
        case "password-input":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('password-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('password-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password .formulario-input').classList.remove('formulario-input-error');
                campos['password'] = true;
            } else {
                document.getElementById('password-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('password-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password .formulario-input').classList.add('formulario-input-error');
                campos['password'] = false;
            }
        break;
        case "confirm-password-input":
            var inputPassword1 = document.getElementById('password-input');
            var inputPassword2 = document.getElementById('confirm-password-input');
            if (inputPassword1.value !== inputPassword2.value) {
                document.getElementById('confirm-password-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('confirm-password-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-confirm-password .formulario-input').classList.add('formulario-input-error');
                campos['password'] = false;
            } else {
                document.getElementById('confirm-password-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('confirm-password-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-confirm-password .formulario-input').classList.remove('formulario-input-error');
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
        data.innerHTML ="Email: " + document.querySelector('#email-input').value +
         "\nFull Name: " + document.querySelector('#full-name-input').value + "\nPassword: "+document.querySelector('#password-input').value;
        sendRegisterForm();
    }else {
        data.style.display = 'flex';
        data.style.color = 'red';
        data.textContent = 'Complete the fields properly';
    } 
})

//Post Request
function sendRegisterForm(){
    fetch('http://localhost:4000/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            email: document.getElementById('email-input').value,
            fullName: document.getElementById('full-name-input').value,
            password: document.getElementById('password-input').value,
        })
    })
    .then (response => response.json())
    .then (data => console.log(data))
    .catch(function(error){
        console.log("Error sending data");
    })
}