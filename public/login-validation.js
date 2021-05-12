var expresiones = {
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,    
	password: /^[a-zA-Z0-9]{8,16}$/,         // Al menos 8 caracteres, formados por letras y números.
}

var campos = {
    email: false,
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
    }
}
    
inputs.forEach( function(input){
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm);   
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = document.querySelector('.data');
    if (campos.email && campos.password){
        formulario.reset();
        data.style.display = 'flex';
        data.innerHTML ="Email: "+ document.querySelector('#emailInput').value +
         " Password: " + document.querySelector('#passwordInput').value;
        sendLoginForm();
    }else {
        data.style.display = 'flex';
        data.style.color = 'red';
        data.textContent = 'Complete the fields properly';
    }
})

//Put Request
function sendLoginForm(){
    fetch('http://localhost:4000/login.html',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: document.getElementById('emailInput').value,
            password: document.getElementById('passwordInput').value,
        })
    })
    .then (response => response.json())
    .then (data => console.log(data))
    .catch(function(error){
        console.log("Error sending data");
    })
} 